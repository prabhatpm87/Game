// pages/Auth/Login.js

import React, { useContext } from "react";
import Link from "next/link";
//import { UserContext } from "../../context/UserContext";

const Login = () => {
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

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.8)', // Adjust opacity or any other properties
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    marginBottom: '10px',
    width: '100%',
  };

  const linkStyle = {
    color: 'white', // Change the color of the link to blue
    textDecoration: 'none', // Remove the underline
    marginLeft: '100px', // Add some spacing between "Remember me" and the link
  };

  const rememberMeStyle = {
    color: 'white', // Change the color of the "Remember me" text to white
  };
  const PasswordStyle = {
    color: 'white', // Change the color of the "Remember me" text to white
  };
  const EmailStyle = {
    color: 'white', // Change the color of the "Remember me" text to white
  };

  
  

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      // Perform login API call
      const response = await fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Get the user data from the response and set it in the context
        const userData = await response.json(); // assuming the API sends user data upon successful login
        setUserData(userData);

        // Redirect to home page after successful login
        history.push('/home');
      } else {
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
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2" style={EmailStyle}>Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" style={inputStyle} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2" style={PasswordStyle}>Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" style={inputStyle} />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
            <label className="form-check-label" htmlFor="dropdownCheck2" style={rememberMeStyle}>Remember me</label>
            <Link href="/Auth/Register" style={linkStyle}>Register here</Link>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
