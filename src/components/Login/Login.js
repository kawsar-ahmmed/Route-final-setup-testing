import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    return (
        <div className='form-contianer'>
            <div className="form-main">
                <div className="form-title">
                    <h3>Login</h3>
                </div>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Login" required />
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