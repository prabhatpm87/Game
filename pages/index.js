import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import UserList from "./components/UserList1";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState(900);
  const [canClick, setCanClick] = useState(true);
  const [tileClicked, setTileClicked] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    name: "John Doe",
    amountWon: 500,
    playedTimes: 10,
  });
  const [user, setUser] = useState({
    username: "JohnDoe",
    withdrawal: 50,
    available: 1000,
  });
  const [result, setResult] = useState(null); // "winner", "loser", or null
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAvailableBalance();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        if (time <= 600) {
          setCanClick(false);
        }
      } else {
        clearInterval(interval);
        handleGameResult();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    fetchAvailableBalance();
  }, []);

  const fetchAvailableBalance = async () => {
    try {
      const response = await fetch("your_api_endpoint");
      if (response.ok) {
        const data = await response.json();
        setUser(data.balance);
      } else {
        console.error("Failed to fetch available balance");
      }
    } catch (error) {
      console.error("Error fetching available balance:", error);
    }
  };

  const handleGameResult = () => {
    // Simulate winning or losing based on some condition
    const userWins = Math.random() < 0.5; // Replace this with your actual win/lose condition

    if (userWins) {
      setResult("winner");
    } else {
      setResult("loser");
    }
  };

  const handleTileClick = (e) => {
    if (!tileClicked) {
      e.currentTarget.style.width = "220px";
      e.currentTarget.style.height = "180px";
      e.currentTarget.style.border = "1px solid white";
      setTileClicked(true);
    }
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timerStyle = {
    fontSize: "70px",
    marginLeft: "1000px",
    fontFamily: "'Playpen Sans', cursive",
    color: time > 601 ? "red" : "green",
  };

  const UserListStyle = {
    marginTop: "50px", // Adjust the marginTop value as needed
    margin: "0 50px",
    backgroundColor: "white",
  };

  const balanceStyle = {
    border: "2px solid black",
    padding: "5px 10px",
    backgroundColor: "white",
  };

  return (
    <div>
      <div>
        <nav
          style={{ backgroundColor: "#e3f2fd" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <div className="container-fluid">
              <p className="navbar-brand">
                <span style={balanceStyle}>
                  Available Balance: &#8377;{user.available}
                </span>
              </p>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="/components/Rules">
                    Read Rules
                  </Link>
                </li>
              </ul>
              <Link href="/Auth/recharge">
                <button className="btn btn-outline-success" type="submit">
                  Recharge
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div
        style={{
          opacity: 0.9,
          backgroundImage: "url('/banner2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p style={timerStyle}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px",marginBottom:"80px" }}>
          <div
            style={{
              textDecoration: "none",
              width: "200px",
              height: "160px",
              backgroundColor: "#ff6b6b",
              border: "1px solid transparent",
              transition: "all 0.3s",
            }}
            onClick={handleTileClick}
          ></div>
          <div
            style={{
              textDecoration: "none",
              width: "200px",
              height: "160px",
              backgroundColor: "#7F9CF5",
              border: "1px solid transparent",
              transition: "all 0.3s",
            }}
            onClick={handleTileClick}
          ></div>
          <div
            style={{
              textDecoration: "none",
              width: "200px",
              height: "160px",
              backgroundColor: "#68D391",
              border: "1px solid transparent",
              transition: "all 0.3s",
            }}
            onClick={handleTileClick}
          ></div>
        </div>
        <div style={UserListStyle}>
          {/* Conditionally render winner or loser content */}
          {result === "winner" && (
            <div>
              <h1>Congratulations! You Win!</h1>
              {/* Add any other content for the winner */}
            </div>
          )}
          {result === "loser" && (
            <div>
              <h1>Better Luck Next Time!</h1>
              {/* Add any other content for the loser */}
            </div>
          )}
          {result === null && <UserList loggedInUser={loggedInUser} />}
        </div>
        <footer className="text-center bg-gradient py-0">
          <div
            style={{
              marginTop: "0px",
              background: "#e3f2fd",
              boxShadow: "0px 5px 5px -5px rgba(0, 0, 0, 0.75)",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "19px", textAlign: "center" }}>
              <Link href="/components/referNearn">
                <Image
                  src="/smartphone.png"
                  alt="Image 1"
                  width={60}
                  height={60}
                />
                <p>Refer & Earn</p>
              </Link>
            </div>
            <div style={{ marginTop: "19px", textAlign: "center" }}>
              <Link href="/components/myaccount">
                <Image
                  src="/My Account.png"
                  alt="Image 3"
                  width={50}
                  height={50}
                />
                <p>My Account</p>
              </Link>
            </div>
            <div style={{ marginTop: "19px", textAlign: "center" }}>
              <Link href="/components/Dashboard">
                <Image
                  src="/Dashboard.png"
                  alt="Image 3"
                  width={50}
                  height={50}
                />
                <p>Dashboard</p>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
