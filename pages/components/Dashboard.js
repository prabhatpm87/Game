// Dashboard.js
import React from 'react';




const Dashboard = ({ userHistory }) => {
  // Check if userHistory is undefined or not an array
  if (!userHistory || !Array.isArray(userHistory)) {
    // You can handle the case where userHistory is undefined or not an array
    // Here, I'm displaying a message, but you can adjust it as per your requirement
    return <div>No user history available.</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>User History:</h2>
        <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Transaction ID</th>
              <th>Recharge Amount</th>
            </tr>
          </thead>
          <tbody>
            {userHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.userName}</td>
                <td>{entry.transactionId}</td>
                <td>{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
