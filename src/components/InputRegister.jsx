import React from 'react'

const InputRegister = () => {
    return (
        <form class="register-input">
            <input type="text" placeholder="Name" required="" value="" />
            <input type="email" placeholder="Email" required="" value="" />
            <input type="password" placeholder="Password" required="" value="" />
            <button type="submit">Register</button>
        </form>
    )
}

export default InputRegister