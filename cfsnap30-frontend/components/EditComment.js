import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { API_URL } from '@/config/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function EditComment({editId, commentToEdit, setToCancel, comment, setComment, token, setIsEdit}) {

    useEffect(() => {
        setComment(commentToEdit)
    }, [])

    const router = useRouter()

    const [entry, setEntry] = useState(router.route)

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

        //console.table(params);

        const res = await fetch(`${API_URL}/comments/${editId}`,  {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(params)
        })


        if(!res.ok){
            if (res.status === 403 || res.status === 401) {
                toast.error('Unauthorized')
                return
              }
              toast.error('Something Went Wrong')
        } else {
            //setComment('')
            toast.success('Comment successful! Thanks for your post.')
            setIsEdit(0)
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
                    <input 
                        type="text" 
                        name="comment" 
                        id="comment" 
                        value={comment} 
                        onChange={handleInputChange} 
                        className="addCommentFormField" /><br/>
                    <input 
                        type="hidden" 
                        name="entry" 
                        id="entry" 
                        value={entry} />
                    &nbsp; &nbsp;
                    <input 
                        type="reset" 
                        value="Cancel" 
                        className="btn btn-light" 
                        style={{float:"right"}} 
                        onClick={() => setToCancel(0)} /> &nbsp;
                    <input 
                        type="submit" 
                        value="Edit Comment" 
                        className="btn btn-primary" 
                        style={{float:"right"}} /> &nbsp;
                    
                    <br />
                </div>
            </form>
        </div>
    )
}