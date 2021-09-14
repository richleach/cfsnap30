import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index' 

export default function AddComment() {

    const router = useRouter()
    //console.log(router.route)

    const [values, setValues] = useState({
        //page: router.route.startsWith('/react'),
        page: router.route,
        comment: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(values)
        
        //const hasEmptyFields = Object.values(values).some((element) => element === '')
        //if(hasEmptyFields) {console.log(`Please fill in all fields`)}

        const res = await fetch(`${API_URL}/comments`,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        console.log(JSON.stringify(values))

        if(!res.ok){
            console.log('Something went wrong....')
        } else{
            const comment = await res.json()
        }
        //const {name, value} = e
        //setValues({...values, [name]: value})
        console.log(e)
        router.push(`${router.route}?q=1`)

    }

    const handleInputChange = (e) => {
        const {name, value} = e.target  //generic form processing: destructure name and value from e.target
        setValues({...values, [name]: value})  //spread in existing values but add new name and new value just entered into form
        console.log(values)
    }

    return (
        <div>
            <h2 className="comments-header">
                COMMENTS
            </h2>
            <div className="comments-total">
                12 Comments
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <textarea name="comment" id="comment" value={values.description} onChange={handleInputChange} rows="3" /><br/>
                    <input type="hidden" name="page" id="page" value={values.page} />
                    <input type="submit" value="Add Comment" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}