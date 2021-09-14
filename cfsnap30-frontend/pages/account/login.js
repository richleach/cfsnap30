import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import Link from 'next/link'
import styles from '@/styles/AuthForm.module.css'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email, password})
    }

    return (
        <>
            <div className={styles.auth}>
                <h3>Log In</h3>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Login" className="btn" />
                    
                </form>
                <p>Don't have an account? <Link href='/account/register'><a  style={{color: "blue"}}>Register</a></Link></p>
            </div>
        </>
    )
}