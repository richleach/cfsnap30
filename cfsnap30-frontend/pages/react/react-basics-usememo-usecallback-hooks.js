import { useEffect, useState, useContext } from 'react';
import Link from "next/link";
import Head from 'next/head';
import AddComment from '@/components/AddComment'
import EditComment from '@/components/EditComment'
import { API_URL } from '@/config/index'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'
import { parseCookies } from '@/helpers/index'
import { BlogElements } from '@/components/BlogElements'

function reactBasicsUsememoUsecallbackHooks({data, userComments, token}) {

    const {user, logout, checkUserLoggedIn, loggedIn} = useContext(AuthContext)

    /* console.table(data); */
    //console.log(userComments[0].user.username);

    const router = useRouter()

    const [isEdit, setIsEdit] = useState(0)
    const [comment, setComment] = useState('') 

    if(checkUserLoggedIn){
        console.log('USER IS LOGGED IN!');
    }

    const deleteEvent = async (e) => {
        if(confirm('Are you sure you want to delete? This action can not be un-done!')){
            
            const res = await fetch(`${API_URL}/comments/${e}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
            const info = await res.json()

            if(!res.ok){ 
                toast.error('A problem occurred while deleting your record on the database server', info.message)
            } else {
                router.push(`${router.route}`)
            }
        }
    }    

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useMemo and useCallback Hooks</title>
          </Head>
            <div className="container">
            <ToastContainer />
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>   
                <h2>React Basics: useMemo &amp; useCallback Hooks</h2>

                <p> useMemo invokes the function then caches result. useCallback caches the function and only runs it if the dependency (included in []) changes (usually a state or props value).</p>

                <p>Basic code to implement useMemo and useCallback hooks. </p>

                <h4>ParentComponent.js</h4>
            </div>

            <div className="container">    	
<pre>{`//import this file into App.js
import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>
            Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>
            Increment Salary</Button>
        </div>
    )
}

export default ParentComponent `}
</pre>

<br /><br />
<h4>Count.js</h4>            	
<pre>{`import React from 'react'

function Count({text, count}) {
    return (
        <div>
            {text} is {count}
        </div>
    )
}

export default React.memo(Count) `}
</pre>

<br /><br />
<h4>Title.js</h4>           	
<pre>{`import React from 'react'
function Title() {
    console.log('Rendering title component');
    return (
        <div>
            <h2>useCallback Hook</h2>
        </div>
    )
}

export default React.memo(Title) `}
</pre>

<br /><br />
<h4>Button.js</h4>        	
<pre>{`import React from 'react'
function Button({handleClick, children}) {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)	`}
</pre>
        {data.length == 0 && <h3>No comments yet...</h3>}
        {data.length == 1 && <h3>1 Comment</h3>}
        {data.length > 1 && <h3>{data.length} Comments</h3>}

        {user ? ( 
            <>
                <AddComment token={token} user = {user} />
            </>
        ) : (
            <>
                <h4 className="comments-header" style={{textAlign: "center"}}>
                    <Link href="/account/login"><a style={{color: "navy"}}>Login/Register To Add Comment</a></Link>
                </h4><br />
            </>
        )}

        <div>
            {data.length > 0 && data.map(item => (
                <div key={item.id} className="blogComments">
                    <span className="blogCommentsUser">{/* {item.user.username} */} {new Date(item.published_at).toLocaleDateString('en-us')}</span> <br />
                    {isEdit == item.id ? 
                        
                        <EditComment 
                            editId={item.id} 
                            commentToEdit={item.comment} 
                            setToCancel={setIsEdit} 
                            comment={comment}
                            setComment={setComment}
                            token={token}
                            setIsEdit={setIsEdit}
                            /> 
                    : 
                    <>
                        {item.comment} <br />
                        <FaThumbsUp style={{paddingTop:5, color:"white"}} /><span style={{color:"white"}}>0</span> &nbsp; &nbsp; 

                        {userComments.length > 0 && item.user.username == userComments[0].user.username ? (
                        <span style={{float:"right"}}>
                                <a onClick={() => setIsEdit(item.id)} style={{cursor:"pointer"}}><FaPencilAlt style={{paddingTop:5}} /> Edit</a> &nbsp; 
                                <a onClick={() => deleteEvent(item.id)} style={{cursor:"pointer"}}><FaTimes style={{paddingTop:5}} /> Delete</a> 
                            </span> 
                            ) : (
                                <span style={{float:"right"}}> </span>
                            )
                        }
                    </>
                    }     
                </div>
                )
             ) 
            }
        
        </div>

            </div>
        </div>
        )
}    

export default reactBasicsUsememoUsecallbackHooks

export async function getServerSideProps(context){
    //this will retrieve all of the comments for this page
    const res = await fetch(`${API_URL}/comments?entry_contains=${context.resolvedUrl}&_sort=published_at:DESC`)
    const data = await res.json()

    let {token} = parseCookies(context.req)
    
    if(token === undefined){
        let token = 0
        let userComments = 0
        return  {
            props: { data, userComments, token} 
        }
    } else {
        const uComments = await fetch(`${API_URL}/comments/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    
        const userComments = await uComments.json()

        return { 
            props: { data, userComments, token} 
        }
    }
} 