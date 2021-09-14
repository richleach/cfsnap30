import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authorized' })
      return
    }

    const { token } = cookie.parse(req.headers.cookie)

    const strapiRes = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const user = await strapiRes.json()

    if (strapiRes.ok) {
      res.status(200).json({ user })
    } else {
      res.status(403).json({ message: 'User forbidden' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}



/* import { API_URL } from "@/config/index"
import axios from 'axios'
import cookie from 'cookie'

export default async (req, res) => {
    if(req.method === 'GET'){
        if(!req.headers.cookie){
            res.status(403).json({message: 'Not authorized'})
            return
        }

        const {token} = cookie.parse(req.headers.cookie)

        // Request API.
        const strapiRes = await axios
        .get(`${API_URL}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
            },
        })

        .then(response => {
        // Handle success
        //res.status(200).json(response.data.user)
        res.status(200).json(response)
        console.log(response);
        })
        .catch(error => {
        // Handle error
        res.status(403).json({message: error})
        //console.log('The status is: User is forbidden....', error)
        })

   
    } else {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({message: `Method ${req.method} is not allowed.`})
    }
}
 */


