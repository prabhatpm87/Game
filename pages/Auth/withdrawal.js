import React, { useState } from 'react';

const Recharge = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { upiId, amount, transactionId });
    // You can add your logic for form submission, such as sending data to an API
  };

  const backgroundStyle = {
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const formStyle = {
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '100%',
  };

  const inputContainerStyle = {
    marginBottom: '15px',
    position: 'relative',
  };

  const rupeeSymbolStyle = {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    left: '10px',
    color: 'black',
    fontSize:"30px"
  };

  const labelStyle = {
    fontSize: '22px', // Increased font size
    marginBottom: '5px', // Adjusted margin
  };

  const inputStyle = {
    padding: '12px',
    paddingLeft: '30px',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '22px',
  };

  const buttonStyle = {
    padding: '14px',
    width: '100%',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <div style={backgroundStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="upiId" style={labelStyle}>
          UPI ID:
        </label>
        <input
          type="text"
          id="upiId"
          name="upiId"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="amount" style={labelStyle}>
          Withdrawal Amount:
        </label>
        <div style={inputContainerStyle}>
          <span style={rupeeSymbolStyle}>₹</span>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Recharge;
