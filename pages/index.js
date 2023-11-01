import { useState, useEffect } from "react";
import Image from "next/image";
export default function Home() {
  const [time, setTime] = useState(120); // Initial time set to 2 minutes (120 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1); // Decrement the time every second
      } else {
        setTime(120); // Reset the time back to 2 minutes when it reaches 0
      }
    }, 1000); // Update the timer every second

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [time]);

  // Format the time into minutes and seconds
  //const availableBalance = 500;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timerStyle = {
    fontSize: "40px", // Adjust the font size as needed
  };

  const [availableBalance, setAvailableBalance] = useState(0); // State to hold the available balance
  //const [time, setTime] = useState(120); // Initial time in seconds (2 minutes)

  useEffect(() => {
    // Fetch available balance when the component mounts
    fetchAvailableBalance();
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to fetch the available balance
  const fetchAvailableBalance = async () => {
    try {
      // Replace 'your_api_endpoint' with your actual API endpoint
      const response = await fetch('your_api_endpoint');
      if (response.ok) {
        const data = await response.json();
        // Assuming the API response contains the available balance data
        setAvailableBalance(data.balance); // Update the available balance in state
      } else {
        console.error('Failed to fetch available balance');
      }
    } catch (error) {
      console.error('Error fetching available balance:', error);
    }
  };

  return (
    // ... Your existing JSX code
    <div>
      <div>
        <nav
          style={{ backgroundColor: "#e3f2fd" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <button onClick={fetchAvailableBalance} className="navbar-brand">
              Available Balance: &#8377;{availableBalance}
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/components/Rules">
                    Read Rules
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit">
                Recharge
              </button>
            </div>
          </div>
        </nav>
      </div>

      <br />
      {/* Header */}

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a class="nav-link active" href="/components/Active">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/components/Parity">
            Parity
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/components/Sapre">
            Sapre
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/components/Bcone">
            Bcone
          </a>
        </li>
      </ul>
      <br />
      <p style={timerStyle}>
        Countdown Timer: {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>

      <br />
      {/* Tiles */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="/page1" style={{ textDecoration: "none" }}>
          <div
            className="card mb-3"
            style={{ width: "12rem", backgroundColor: "#ff6b6b" }}
          >
            <div className="card-body">
              <Image src="/lion.png" alt="Image 3" width={50} height={50} />
            </div>
          </div>
        </a>
        <a href="/page2" style={{ textDecoration: "none" }}>
          <div
            className="card mb-3"
            style={{ width: "12rem", backgroundColor: "#7F9CF5" }}
          >
            <div className="card-body">
              <Image src="/snake.png" alt="Image 3" width={50} height={50} />
            </div>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a href="/page3" style={{ textDecoration: "none" }}>
          <div
            className="card mb-3"
            style={{ width: "12rem", backgroundColor: "#F6E05E" }}
          >
            <div className="card-body">
              <Image src="/dino.png" alt="Image 3" width={50} height={50} />
            </div>
          </div>
        </a>
        <a href="/page4" style={{ textDecoration: "none" }}>
          <div
            className="card mb-3"
            style={{ width: "12rem", backgroundColor: "#68D391" }}
          >
            <div className="card-body">
              <Image src="/barong.png" alt="Image 3" width={50} height={50} />
            </div>
          </div>
        </a>
      </div>
      {/* Footer */}
      <footer className="text-center py-3" style={{ marginTop: "90px" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <a href="/components/referNearn">
              <Image
                src="/smartphone.png"
                alt="Image 1"
                width={60}
                height={60}
              />
              <p>Refer & Earn</p>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/components/PayNow">
              <Image src="/Pay Now.jpg" alt="Image 2" width={60} height={60} />
              <p>Pay Now</p>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/components/myaccount">
              <Image
                src="/My Account.png"
                alt="Image 3"
                width={50}
                height={50}
              />
              <p>My Account</p>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/Auth/Login">
              <Image src="/Logout.jpg" alt="Image 3" width={50} height={50} />
              <p>Logout</p>
            </a>
          </div>
        </div>
        <div>
          <p>&copy; 2023 YourWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
    // ... Rest of your JSX
  );
}
