import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import UserList from "./components/UserList1";
import Link from "next/link";

const Home = () => {
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
  const [result, setResult] = useState(null);
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

  useEffect(() => {
    // For now, let's use a placeholder for authentication check
    const isAuthenticated = true; // Replace this with your authentication logic

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
      router.push("/Auth/Login");
    }
  }, []); // The empty dependency array ensures this effect runs only once on component mount

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
    const userWins = Math.random() < 0.5;

    if (userWins) {
      setResult("winner");
    } else {
      setResult("loser");
    }
  };

  const handleMyAccountClick = async () => {
    try {
      const response = await fetch("http://51.20.79.158/user/v1/user_details", {
        method: "POST", // Change the method to GET
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
      });

      if (response.ok) {
        const myAccountData = await response.json();

        // Update the state with the received user details
        setLoggedInUser({
          name: myAccountData.name,
          amountWon: myAccountData.wallet_ballance,
          playedTimes: myAccountData.total_wins + myAccountData.total_losses,
        });

        // Navigate to the My Account page after a successful API call
        router.push("/components/myaccount");
      } else {
        console.error("Failed to fetch My Account data");
      }
    } catch (error) {
      console.error("Error fetching My Account data:", error);
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
    fontSize: "4vw", // Set the font size as a percentage of viewport width
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "1100px", // Set the left margin as a percentage of the container width
    fontFamily: "'Playpen Sans', cursive",
    color: time > 601 ? "red" : "green",
  
    // Media query for smaller screens (adjust the values as needed)
    '@media (max-width: 600px)': {
      fontSize: '8vw',
    },
  };
  
  

  const UserListStyle = {
    marginTop: "250px",
    margin: "0 50px",
    backgroundColor: "white",
    marginBottom: "auto",
  };

  const balanceStyle = {
    border: "2px solid black",
    padding: "5px",
    backgroundColor: "white",
    marginLeft:"5px",
    width:"240px",
    height:"30px",
    textAlign:"center",
    fontSize:"20px",
    borderRadius:"5px"
  };
  

  const backgroundContainerStyle = {
    opacity: 0.9,
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <div>
      <div>
        <nav style={{ backgroundColor: "#e3f2fd",height:"100px",width:"100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={balanceStyle}>
              Available Balance: &#8377;{user.available}
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href="/Auth/recharge">
                <button
                  style={{
                    border: "2px solid black",
                    padding: "5px 0px",
                    backgroundColor: "#28a745",
                    color: "white",
                    marginRight:"10px",
                    width:"150px",
                    height:"45px",
                    fontSize:"20px",
                    borderRadius:"5px"
                  }}
                >
                  Recharge
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div style={backgroundContainerStyle}>
        <p style={timerStyle}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
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
          <UserList loggedInUser={loggedInUser} />
        </div>
        <footer >
          <div
            style={{
              
              background: "#e3f2fd",
              boxShadow: "0px 5px 5px -5px rgba(0, 0, 0, 0.75)",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "19px", textAlign: "center" }}>
              <div onClick={handleMyAccountClick}>
                <Link
                  href="/components/myaccount"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Image
                    src="/My Account.png"
                    alt="Image 3"
                    width={50}
                    height={50}
                  />
                  <p>My Account</p>
                </Link>
              </div>
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
};

export default Home;
