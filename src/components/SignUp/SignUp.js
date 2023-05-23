import React from 'react';
import './SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
const SignUp = () => {
    return (
        <div className='form-contianer'>
            <div className="form-main">
                <div className="form-title">
                    <h3>Sign Up</h3>
                </div>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" required/>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Sign Up" />
                    </div>
                    <div className="usr-text">
                        <p>
                            already have an account? <Link to="/login"> Login</Link>
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