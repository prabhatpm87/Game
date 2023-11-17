// pages/Auth/Registration.js

import React from "react";
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

const Registration = () => {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const backgroundStyles = {
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: 'cover',
    // Other background properties
  };

  const centerBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const formBox = {
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    background: "url('/banner2.jpg')",
    backgroundSize: 'cover',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '10px',
    width: '100%',
  };

  const signUpButtonStyle = {
    marginTop: '10px',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const textStyle = {
    color: 'white',
  };
 const firstStyle = {
    color:'white'
 }
 const LastStyle = {
    color:'white'
 }
 const EmailStyle = {
    color:'white'
 }
 const PhoneStyle = {
    color:'white'
 }
 const ReferralStyle = {
    color:'white'
 }

 const handleSignUp = async (event) => {
    event.preventDefault();
  
    // Retrieve the values from password and confirm password fields
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords don't match!"); // Show an alert if passwords don't match
      return; // Prevent further execution
    }
  
    try {
      // Perform the signup logic here using fetch or your preferred method
      const response = await fetch('your-api-endpoint-for-signup', {
        method: 'POST',
        // Add necessary headers and body for the API call
        body: JSON.stringify({
          // Include data from the form fields if required by the API
        }),
      });
  
      if (response.ok) {
        router.push('/otp');
      } else {
        console.error('Sign-up failed');
        // Handle errors or display an alert for unsuccessful sign-up
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle API call errors here
    }
  };

  const handlePasswordVisibility = (field) => {
    if (field === 'password') {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (field === 'confirmPassword') {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    }
  };
  

  return (
    <div style={backgroundStyles}>
    <div style={centerBox}>
      <form style={formBox} onSubmit={handleSignUp}>
        <h2 style={textStyle}>Registration Panel</h2>
        <div className="form-group">
          <label htmlFor="firstName" style={firstStyle}>First Name</label>
          <input type="text" className="form-control" id="firstName" style={inputStyle} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" style={LastStyle}>Last Name</label>
          <input type="text" className="form-control" id="lastName" style={inputStyle} />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={EmailStyle}>Email</label>
          <input type="email" className="form-control" id="email" style={inputStyle} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" style={PhoneStyle}>Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" style={inputStyle} />
        </div>
        <div className="form-group">
      <label htmlFor="password" style={PhoneStyle}>
        Password
        <span
          onClick={() => handlePasswordVisibility('password')}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        >
          <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
        </span>
      </label>
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        className="form-control"
        id="password"
        style={inputStyle}
      />
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword" style={ReferralStyle}>
        Confirm Password
        <span
          onClick={() => handlePasswordVisibility('confirmPassword')}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        >
          <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEye : faEyeSlash} />
        </span>
      </label>
      <input
        type={isConfirmPasswordVisible ? 'text' : 'password'}
        className="form-control"
        id="confirmPassword"
        style={inputStyle}
      />
    </div>
        <div className="form-group">
          <label htmlFor="referralCode" style={ReferralStyle}>Referral Code</label>
          <input type="text" className="form-control" id="referralCode" style={inputStyle} />
        </div>
        <button type="submit" style={signUpButtonStyle}>Sign Up</button>
      </form>
    </div>
  </div>
  );
};

export default Registration;
