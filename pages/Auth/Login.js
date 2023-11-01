import React from 'react';
//import { useHistory } from 'react-router-dom';

const Login = () => {
  //const history = useHistory();

  const centerBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const formBox = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
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
    <div style={centerBox}>
      <form style={formBox} onSubmit={handleLogin}>
        <div class="form-group">
          <label for="exampleDropdownFormEmail2">Email address</label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleDropdownFormPassword2">Password</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
          <label class="form-check-label" for="dropdownCheck2">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
