import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { identifier, password } = req.body

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await strapiRes.json()

    //console.log(data.user);

    if (strapiRes.ok) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      )

      res.status(200).json({ user: data.user })

    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}


/* import { API_URL } from "@/config/index"
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    if(req.method === 'POST'){
        const {identifier, password} = req.body

        const strapiRes = await axios
        .post(`${API_URL}/auth/local`, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
            // Handle success.
            console.log('WELL DONE!')
            console.log('USER PROFILE', response.data.user)
            console.log('USER TOKEN', response.data.jwt) 

            res.setHeader('Set-Cookie', cookie.serialize('token', response.data.jwt, {
                httpOnly: true, 
                secure: process.env.NODE_ENV !== 'development', 
                maxAge: 60*60*24*7, 
                sameSite: 'strict', 
                path: '/'
            }))

            res.status(200).json(response.data.user)
            
        })
        .catch(error => {
            // Handle error
            res.status(error.response.status).json({message: error.response.data.message[0].messages[0].message})
        })
   
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} is not allowed.`})
    }
} */