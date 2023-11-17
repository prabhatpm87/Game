// pages/Auth/Registration.js

import React, { useState } from "react";
import { useRouter } from 'next/router';

const Registration = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(''); // State to manage the OTP input

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

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // Perform the OTP verification logic using an API call
      const response = await fetch('your-api-endpoint-for-otp-verification', {
        method: 'POST',
        // Add necessary headers and body for the API call
        body: JSON.stringify({
          otp: otp // Sending the entered OTP for verification
        }),
      });

      if (response.ok) {
        // If OTP verification is successful, redirect to the login page
        router.push('/login'); // Redirect to the login page
      } else {
        console.error('OTP verification failed');
        // Handle errors or display an alert for unsuccessful OTP verification
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle API call errors here
    }
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  return (
    <div style={backgroundStyles}>
      <div style={centerBox}>
        <form style={formBox} onSubmit={handleSignUp}>
          <h2 style={textStyle}>Enter OTP</h2>
          <div className="form-group">
            <label htmlFor="otp" style={textStyle}>OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="form-control"
              id="otp"
              style={inputStyle}
            />
          </div>
          <button type="submit" style={signUpButtonStyle}>Submit OTP</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
