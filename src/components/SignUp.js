import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [email, SetEmail] = useState('');
    const [pass1, SetPass1] = useState('');
    const [pass2, SetPass2] = useState('');

    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('pass1', JSON.stringify(pass1));
        localStorage.setItem('pass2', JSON.stringify(pass2));

        if (pass1 === pass2) {
            document.getElementById('error-msg').innerText = "";
            navigate("/signupsuccess");

        } else {
            document.getElementById('error-msg').innerText = "Passwords doesn't match!";
        }
    }
    return (
        <div className='sign-up'>
            <div className='signup-form'>
                <h1>Sign Up here!!</h1>
                <form>
                    <input value={email} onChange={(e) => SetEmail(e.target.value)} type="email" className='signup-input' placeholder='Enter your email' /> <br />
                    <input value={pass1} onChange={(e) => SetPass1(e.target.value)} type="password" className='signup-input' placeholder='Create a password' /> <br />
                    <input value={pass2} onChange={(e) => SetPass2(e.target.value)} type="password" className='signup-input' placeholder='Confirm your password' />
                    <button onClick={handlesubmit} type="submit" className='signup-btn' id='signup-btn'>Sign Up</button>
                </form>
                <p className='error-msg' id='error-msg'></p>
                <h3>Already have an account? <span><Link to='login'>Login</Link></span></h3>
            </div>
        </div>
    )
}

export default SignUp