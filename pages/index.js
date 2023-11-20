import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import UserList from "./components/UserList1";
import Link from "next/link";
import Head from 'next/head';

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

  const backgroundContainerStyle = {
    opacity: 0.9,
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative", // Make the position relative

    '@media (max-width: 768px)': {
      backgroundSize: "contain", // Adjust background size for smaller screens
    },
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timerStyle = {
  fontSize: "4vw",
  marginTop: "0px",
  marginBottom: "0px",
  marginLeft: "5%", // Adjusted margin for smaller screens
  fontFamily: "'Playpen Sans', cursive",
  color: time > 601 ? "red" : "green",

  '@media (min-width: 600px)': {
    fontSize: "6vw", // Adjusted font size for medium screens
  },

  '@media (min-width: 768px)': {
    fontSize: "8vw", // Adjusted font size for large screens
    marginLeft: "2%", // Adjusted margin for larger screens
  },
};
  
const UserListStyle = {
  marginTop: "auto", // Use auto to push the UserList to the bottom
  marginBottom: "0px", // Space for the footer
  backgroundColor: "white",
  marginLeft: "40px", // Adjust margin based on your design
  marginRight: "40px", // Adjust margin based on your design
  

  '@media (max-width: 768px)': {
    marginTop: "50px", // Adjusted value for smaller screens
    marginLeft: "5px", // Adjusted margin for smaller screens
    marginRight: "5px", // Adjusted margin for smaller screens
    marginBottom: "80px", // Ensure space for the footer on smaller screens
  },
  '@media (max-width: 600px)': {
    marginTop: "30px", // Further adjustment for even smaller screens
    marginLeft: "2px", // Adjusted margin for even smaller screens
    marginRight: "2px", // Adjusted margin for even smaller screens
    marginBottom: "80px", // Ensure space for the footer on even smaller screens
  },
};

const balanceStyle = {
  border: "2px solid black",
  padding: "5px",
  backgroundColor: "white",
  marginLeft: "5px",
  width: "240px",
  height: "30px",
  textAlign: "center",
  fontSize: "20px",
  borderRadius: "5px",

  '@media (max-width: 768px)': {
    width: "180px", // Adjusted width for smaller screens
  },

  '@media (min-width: 1024px)': {
    width: "300px", // Adjusted width for larger screens
  },
};
  const footerStyle = {
    background: "#e3f2fd",
    boxShadow: "0px 5px 5px -5px rgba(0, 0, 0, 0.75)",
    display: "flex",
    justifyContent: "space-around",
    height: "80px",
    position: "fixed", // Change to fixed for a fixed position at the bottom
    bottom: 0, // Place the footer at the bottom
    width: "100%", // Ensure the footer spans the full width
  };
  

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div>
      <div>
        <nav style={{ backgroundColor: "#e3f2fd",height:"80px",width:"100%" }}>
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
        <footer style={footerStyle}>
          <div
            style={{
              background: "#e3f2fd",
              boxShadow: "0px 5px 5px -5px rgba(0, 0, 0, 0.75)",
              display: "flex",
              justifyContent: "space-around",
              height:"80px",
            }}
          >
            <div style={{ marginTop: "19px", textAlign: "center",marginLeft:"0px" }}>
              <Link href="/components/Dashboard">
                <Image
                  src="/Dashboard.png"
                  alt="Image 3"
                  width={30}
                  height={30}
                />
                <p style={{marginTop:"1px"}}>Home</p>
              </Link>
            </div>
            <div style={{ marginTop: "19px", textAlign: "center",marginLeft:"200px" }}>
              <div onClick={handleMyAccountClick}>
                <Link
                  href="/components/myaccount"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Image
                    src="/My Account.png"
                    alt="Image 3"
                    width={30}
                    height={30}
                  />
                  <p style={{marginTop:"1px"}}>My Account</p>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Home;
