const UserList = ({ loggedInUser }) => {
  const playedHistory = []; // Assuming this array contains the win/loss data

  // Mock function to generate win/loss data for 50 plays
  for (let i = 0; i < 50; i++) {
    const playResult = i % 2 === 0 ? "Win" : "Lose";
    playedHistory.push(playResult);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "none",
          width: "100%",
          maxHeight: "70px", // Adjust the height as needed
          marginLeft: "10px",
          marginBottom:"0px"
        }}
      >
        <h2>Summary</h2>
      </div>
      <div
        style={{
          border: "none",
          width: "100%",
          overflowY: "auto",
          maxHeight: "400px", // Adjust the height as needed
          marginLeft:"10px"
        }}
      >
        <table style={{ width: "97%", borderCollapse: "collapse" }}>
          <thead style={{ position: "sticky", top: 0, background: "white" }}>
            <tr>
              <th style={{ marginLeft:"5px",border: "none", padding: "5px",backgroundColor: '#333',
    color: '#fff', }}>Serial No.</th>
              <th style={{ border: "none", padding: "5px",backgroundColor: '#333',
    color: '#fff', }}>Amount Won</th>
              <th style={{ border: "none", padding: "px",backgroundColor: '#333',
    color: '#fff',}}>Result</th>
            </tr>
          </thead>
          <tbody>
            {loggedInUser &&
              Array.from({ length: 50 }, (_, index) => {
                const serialNumber = index + 1;
                return (
                  <tr key={index}>
                    <td style={{ border: "none", padding: "5px" }}>
                      {serialNumber}
                    </td>
                    <td style={{ border: "none", padding: "5px" }}>
                      ₹{loggedInUser.amountWon}
                    </td>
                    <td style={{ border: "none", padding: "5px" }}>
                      {playedHistory[index] === "Win" ? "Win" : "Lose"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
