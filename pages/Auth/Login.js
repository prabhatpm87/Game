import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const router = useRouter();

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
    width: '100%', // Adjusted width for responsiveness
    maxWidth: '400px', // Maximum width for larger screens
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    background: "url('/banner2.jpg')", // Applying the same background image to the form
    backgroundSize: 'cover',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.8)', // Adjust opacity or any other properties
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '10px',
    width: '90%',
    innerHeight:"10px",
    paddingRight: '30px', // Add padding for the eye icon
    fontSize: '18px', // Increase font size for input fields
  };

  const labelStyle = {
    color: 'white',
    fontSize: '20px', // Increase font size for labels
    marginBottom: '5px',
  };

  const linkStyle = {
    color: 'white', // Change the color of the link to blue
    textDecoration: 'none', // Remove the underline
    marginLeft: '100px', // Add some spacing between "Remember me" and the link
    fontSize: '20px', // Increase font size for the link
  };

  const rememberMeStyle = {
    color: 'white', // Change the color of the "Remember me" text to white
    fontSize: '20px', // Increase font size for "Remember me" text
  };

  const passwordStyle = {
    color: 'white', // Change the color of the "Password" text to white
    fontSize: '25px', // Increase font size for "Password" text
  };

  const buttonStyle = {
    marginTop: '10px',
    fontSize: '20px', // Increase font size for the button
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      const response = await fetch('http://localhost:3000/api/user/v1/userSignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_or_phone: email, // Make sure the field name matches the API expectation
          password: password,   // Make sure the field name matches the API expectation
        }),
      });

      if (response.ok) {
        // Handle successful login
        const userData = await response.json();
        setUserData(userData);
        router.push('/home');
      } else {
        // Handle login failure
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={backgroundStyles}>
      <div style={centerBox}>
        <form style={formBox} onSubmit={handleLogin}>
          <div style={{ marginBottom: '10px' }}>
            <label style={labelStyle}>Email address</label>
            <input type="email" style={inputStyle} placeholder="email@example.com" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={passwordStyle}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                style={inputStyle}
                placeholder="Password"
              />
              <span
                onClick={handleTogglePassword}
                style={{ position: 'absolute', right: '10px', top: '40%', cursor: 'pointer', transform: 'translateY(-50%)' }}
              >
                {showPassword ? '👁️' : '👁️'}
              </span>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" style={rememberMeStyle}>Remember me</label>
            <Link href="/Auth/Register" style={linkStyle}>Register here</Link>
          </div>
          <button type="submit" style={buttonStyle}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
