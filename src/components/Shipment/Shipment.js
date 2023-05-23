
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user, email] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNamelBlur = event => {
        setName(event.target.value)
        console.log('email', name)
    }
    const handleAddresslBlur = event => {
        setAddress(event.target.value)
        console.log('password', address)
    }
    const handlePhonePassrod = event => {
        console.log('confirm Password', phone)
        setPhoneNumber(event.target.value)
    }
    
    // User Create 
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.lod(shipping)

    }

    return (
        <div className='form-contianer'>
            <div className="form-main">
                <div className="form-title">
                    <h3>Shipping Information</h3>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name </label>
                        <input onBlur={handleNamelBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Email </label>
                        <input value={user.email} readOnly type="text" name="name" id="" required style={{'background': '#e8e8e8', 'border':'none', 'color':'#4f4f4f'}} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Address</label>
                        <input onBlur={handleAddresslBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phon Number</label>
                        <input onBlur={handlePhonePassrod} type="text" name="phon" id="" required />
                    </div>
                    <div className="submit-button" style={{'margin-bottom':'35px'}}>
                        <p style={{ 'color': 'red' }}>{error}</p>
                        <input type="submit" value="Add Shipping" />
                    </div>
                    

                </form>
            </div>
        </div>
    );
};

export default Shipment;