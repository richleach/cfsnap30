import Link from 'next/link'
import {useContext} from 'react'
import AuthContext from '@/context/AuthContext'

function Nav() {
    const {user, logout, checkUserLoggedIn, loggedIn} = useContext(AuthContext)
    
    return (
        <div className="navbar">
            <div className="container flex">
                <h1 className="logo"><Link href='/'>cfsnap</Link></h1>
                <nav>
                    <ul>
                        <li><Link href='/react/'>React</Link></li>
                        <li><Link href='/javascript'>Javascript</Link></li>
                        <li><Link href='/css'>CSS</Link></li>
                        <li><Link href='/portfolio'>Portfolio</Link></li>
                        <li><Link href='/contact'><a>Contact</a></Link></li>
                        <li><Link href='/blog'>Blog</Link></li>
                        {user ? (
                                <>
                                    <li><a onClick={() => logout()} value="Logout" style={{cursor: "pointer"}}>Logout</a></li> 
                                </>
                            ) : (
                                <>
                                    <li><Link href='/account/login'>Login/Register</Link></li>
                                </>  
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
