import { parseCookies } from '@/helpers/index'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddComment({token, user}) {

    const router = useRouter()
    //console.log(router.route)

    const [entry, setEntry] = useState(router.route)
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(values)
        
        //const hasEmptyFields = Object.values(values).some((element) => element === '')
        if(e.target.comment.value ==='') {
            toast.error("Please fill in the comments field.")
            return
        }
        //if(hasEmptyFields) {console.log(`Please fill in all fields`)}

        const params = {
            comment: comment,
            entry: entry
        }

        const res = await fetch(`${API_URL}/comments`,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(params)
        })


        if(!res.ok){
            toast.error('Something went wrong, an error occurred. ')
            //console.log(res);
            return
        } else {
            const comment = await res.json()
            setComment('')
            toast.success('Comment successful! Thanks for your post.')
            router.push(`${router.route}`)
        }
        
    }

    const handleInputChange = (e) => {
        setComment(e.target.value)
        //console.log(comment);
    }

    return (
        <div className="addCommentForm">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" name="comment" id="comment" value={comment} onChange={handleInputChange} className="addCommentFormField" placeholder="Add your comment here" /><br/>
                    <input type="hidden" name="entry" id="entry" value={entry} />
                    <input type="submit" value="Add Comment" className="btn btn-primary" style={{float:"right"}} /><br />
                </div>
            </form>
        </div>
    )
}
