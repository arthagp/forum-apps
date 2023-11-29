import React from 'react'

const InputLogin = () => {
    return (
        <form class="login-input">
            <input type="email" placeholder="Email" required="" value="" />
            <input type="password" placeholder="Password" required="" value="" />
            <button type="submit">Login</button>
        </form>
    )
}

export default InputLogin