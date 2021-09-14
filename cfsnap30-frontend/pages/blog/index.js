import { API_URL } from '@/config/index'
import Link from "next/link";
import Head from 'next/head';
import { parseCookies } from '@/helpers/index'
import {useContext} from 'react'
import AuthContext from '@/context/AuthContext'


export default function index({data, comments, token}) {
 
    const {user, logout, checkUserLoggedIn, loggedIn} = useContext(AuthContext)
    return (
        <div className="docs-main my-4">
        <Head>
            <title>CFSNAP Blog Page</title>
        </Head>
            <div className="container">
                    {user ? (
                            <p style={{textAlign: "center"}}>
                                Welcome  {user.username}
                            </p>
                        ) : (
                            <p style={{textAlign: "center"}}>
                                You are not currently logged in.
                            </p> 
                        )
                    }
                <section className="languages">
                    <div className="card">
                        <h3 className="text-center">
                            Posts You Recently Commented On....  
                        </h3>

                        {comments.length > 0 && comments.map((c) => (
                            <div key={c.id} className="blogSummaryItems" style={{width: "100%"}}>
                                {c.user.username} recently posted on cfsnap.com{c.entry} "{c.comment.slice(0, 50)}...."<br />
                                <Link href={`${c.entry}`}>
                                <a>
                                    <button className="btn btn-primary top">Read more</button>
                                </a>    
                                </Link>
                            </div> 
                        ))}

                        {!comments && <div>Login to post a comment.</div>}
                    </div>
                    
                    <div className="card">
                        <h3 className="text-center">
                            Recent Comments....  
                        </h3>
                        {data && data.map(item => (
                            <div key={item.id} className="blogSummaryItems" style={{width: "100%"}}>
                                {item.user.username} recently posted on http://www.cfsnap.com{item.entry} "{item.comment.slice(0, 50)}...."<br />
                                <Link href={`${item.entry}`}>
                                    <button className="btn btn-primary top">Read more</button>
                                </Link>
                            </div>
                        ))}

                        {!data && <div>There are no posted comments.</div>}
                    </div>
                    <div>
                    {/* {c.map(item => (
                    <div key={item.id} className="blogComments">
                        <span className="blogCommentsUser"> {new Date(item.published_at).toLocaleDateString('en-us')}</span> <br />
                        {
                        <>
                        {item.comment} <br />
                        {item.thumbsUp} &nbsp; &nbsp; 
                        {item.thumbsDown} 
                        
                        </>
                        }     
                    </div>
                )
             ) 
            } */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export async function getServerSideProps({req}) {
    //this will retrieve all of the comments for this page
    const res = await fetch(`${API_URL}/comments?_sort=published_at:DESC`)
    const data = await res.json()

    //need this token to make next request for only the user's comments (if any)
    let {token} = parseCookies(req)
        
    if(token === undefined){
        let token = 0
        let comments = 0
        return  {
            props: { comments, token, data} 
        }
    } else {
        const uComments = await fetch(`${API_URL}/comments/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const comments = await uComments.json()

        return { 
            props: { data, comments, token} 
        }
    }
}




/* 
export async function getStaticProps(){
    const res = await fetch(`${API_URL}/comments?_sort=date:DESC&_limit=10`)
    const comments = await res.json()

    return {
        props: {comments},
        revalidate: 1
    }
} */