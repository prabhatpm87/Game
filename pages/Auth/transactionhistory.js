import React from 'react';

const TransactionHistory = () => {
  const containerStyle = {
    backgroundImage: 'url("/banner2.jpg")', // Adjust the path as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  const tableStyle = {
    width: '80%',
    margin: '20px',
    borderCollapse: 'collapse',
    textAlign: 'center',
    overflowX: 'auto',
  };

  const thStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor:"white",
    color:"black"
  };

  const transactions = [
    { srNo: 1, amount: 1000, status: 'Debited', dateTime: '2023-11-17 10:30:00' },
    { srNo: 2, amount: 1500, status: 'Credited', dateTime: '2023-11-16 14:45:00' },
    { srNo: 3, amount: 500, status: 'Credited', dateTime: '2023-11-19 14:45:00' },
    { srNo: 4, amount: 1600, status: 'Credited', dateTime: '2023-10-13 14:45:00' },
    { srNo: 5, amount: 900, status: 'Credited', dateTime: '2023-09-14 14:45:00' },
    // Add more transactions as needed
  ];

  return (
    <div style={containerStyle}>
      <h2>Transaction History</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Sr. No</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.srNo}>
              <td style={tdStyle}>{transaction.srNo}</td>
              <td style={tdStyle}>{transaction.amount}</td>
              <td style={tdStyle}>{transaction.status}</td>
              <td style={tdStyle}>{transaction.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
