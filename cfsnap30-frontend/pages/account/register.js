import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '@/context/AuthContext'
import Link from 'next/link'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const {register, error} = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== passwordConfirm){
            toast.error('Passwords do not match!')
            return
        }
        register({username, email, password})
    }

    return (
        <>
            <div className={styles.auth}>
                <h3>Register</h3>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <input type="submit" value="Login" className="btn" />
                </form>
                <p>Already have an account? <Link href='/account/login'><a  style={{color: "blue"}}>Log In</a></Link></p>
            </div>
        </>
    )
}