import React, { useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleEmailBlure = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlure = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, {replace:true});
    }

    const handleUseSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    // const handleLoginUser = event => {

    // }
    return (
        <div className='form-contianer'>
            <div className="form-main">
                <div className="form-title">
                    <h3>Login</h3>
                </div>
                <form onSubmit={handleUseSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlure} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlure} type="password" name="password" id="" required />
                    </div>
                    <p style={{ 'color': 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div className="submit-button">
                        <input onChange={handleUseSignIn} type="submit" value="Login" required />
                    </div>
                    <div className="usr-text">
                        <p>
                            New to ema-john? <Link to="/signup"> Create an account</Link>
                        </p>
                    </div>
                    {/* Google button */}
                    <div className="google-login">
                        <button><FontAwesomeIcon icon={faG} /> Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;