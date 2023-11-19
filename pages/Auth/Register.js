import React from "react";
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import axios from 'axios'; // Import Axios

const Registration = () => {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // Define the backgroundStyles variable
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
    width: '80%', // Adjusted width for responsiveness
    maxWidth: '400px', // Maximum width for larger screens
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    background: "url('/banner2.jpg')", // Applying the same background image to the form
    backgroundSize: 'cover',
  };

  const textStyle = {
    color: 'white',
  };

  const signUpButtonStyle = {
    marginTop: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.8)', // Adjust opacity or any other properties
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '10px',
    width: '100%',
    paddingRight: '30px', // Add padding for the eye icon
  };

  const firstStyle = {
    color: 'white', // Define the color for the label
  };

  const LastStyle = {
    color: 'white', // Define the color for the label
  };

  const EmailStyle = {
    color: 'white', // Define the color for the label
  };

  const PhoneStyle = {
    color: 'white', // Define the color for the label
  };

  const ReferralStyle = {
    color: 'white', // Define the color for the label
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Retrieve the values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const referralCode = document.getElementById('referralCode').value;

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Use Axios to make the API request
      const response = await axios.post('http://51.20.79.158/user/v1/userSignup', {
        name: lastName ? `${firstName} ${lastName}` : firstName,
        phnno: phoneNumber,
        email,
        password,
        confirm_password: confirmPassword,
        referal_code: referralCode,
        // Include other data if required by the API
      });

      if (response.status === 200) {
        // Show success message
        alert('Successfully Registered');

        // Redirect to the Login page
        router.push('/Auth/Login');
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
