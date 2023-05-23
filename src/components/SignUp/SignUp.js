import React, { useState } from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';






const SignUp = () => {

    // State is here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // Event Handler
    const handleEmailBlur = event => {
        setEmail(event.target.value)
        console.log('email', email)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
        console.log('password', password)
    }

    if (user) {
        navigate('/shop')
    }
    const handleConfirmPassrod = event => {
        console.log('confirm Password', confirmPassword)
        setConfirmPassword(event.target.value)
    }
    const handleErrorlBlur = event => {
        setError(event.target.value)
        console.log('Error', error)
    }
    // User Create 
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password Not Match')
            return;
        }
        if (password.length < 6) {
            setError('Password need 6 carrecter')
            return;
        }
        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className='form-contianer'>
            <div className="form-main">
                <div className="form-title">
                    <h3>Sign Up</h3>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassrod} type="password" name="confirm-password" id="" required />
                    </div>
                    <div className="submit-button">
                        <p style={{ 'color': 'red' }}>{error}</p>
                        <input type="submit" value="Sign Up" />
                    </div>
                    <div className="usr-text">
                        <p>
                            already have an account? <Link to="/login"> Log in</Link>
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

export default SignUp;