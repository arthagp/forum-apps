import React from 'react'
import InputRegister from '../components/InputRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <section className='register-page'>
            <h1>Register Page</h1>
            <InputRegister />
            <p>Already have an account? <span><Link to={'/login'}>Login</Link></span></p>
        </section>
    )
}

export default RegisterPage