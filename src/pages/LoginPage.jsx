import React from 'react'
import InputLogin from '../components/InputLogin'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <section className='login-page'>
            <h1>Login Page</h1>
            <InputLogin />
            <p>Don't have an account? <span><Link to={'/register'}>Register</Link></span></p>
        </section>
    )
}

export default LoginPage