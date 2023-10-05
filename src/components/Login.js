import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, SetEmail] = useState('');
    const [pass, SetPass] = useState('');

    const navigate = useNavigate();

    const mail = JSON.parse(localStorage.getItem("email"));
    const password = JSON.parse(localStorage.getItem("pass1"));
    console.log(email);

    const checkLogin = (e) => {
        e.preventDefault();

        if (password === pass && mail === email) {
            document.getElementById('error-msg').innerText = "Login Successful!!";
            navigate("/loginSuccess");
        } else {
            document.getElementById('error-msg').innerText = "Please check you login credetials!!";
        }
    }

    return (
        <div className='login-page'>
            <div className='login-form'>
                <h1>Login here!!</h1>
                <form>
                    <input value={email} onChange={(e) => SetEmail(e.target.value)} type="email" className='login-input' placeholder='Enter your email' /> <br />
                    <input value={pass} onChange={(e) => SetPass(e.target.value)} type="password" className='login-input' placeholder='Enter your password' /> <br />
                    <button onClick={checkLogin} type="button" className='login-btn'>Login</button>
                </form>
                <p className='error-msg' id='error-msg'></p>
                <h3>Don't have an account? <span><Link to='/'>Sign Up</Link></span></h3>
            </div>
        </div>
    )
}

export default Login