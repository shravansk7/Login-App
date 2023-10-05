import React from 'react'
import { Link } from 'react-router-dom'

const SignUpSuccess = () => {
    return (
        <div className='success-page'>
            <div className='success-box'>
                <h1>Congratulations!!</h1>
                <h3>Your account has been created successfully!</h3>
                <button type="button" className='success-btn'><Link to='/login'>Login</Link></button>
            </div>
        </div>
    )
}

export default SignUpSuccess