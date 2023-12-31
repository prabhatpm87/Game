import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter from next/router
import { ImShare2 } from 'react-icons/im';
import { MdModeEdit } from 'react-icons/md';
import { BiMoneyWithdraw } from 'react-icons/bi';
import Link from "next/link";

const MyAccount = () => {
  const router = useRouter(); // Initialize useRouter
  const [user, setUser] = useState({
    username: "JohnDoe",
    withdrawal: 50,
    available: 1000,
    referralId: "A1B9C",
    email: "johndoe@example.com",
  });

  const backgroundStyles = {
    backgroundImage: "url('/banner2.jpg')",
    backgroundSize: "cover",
    height: "120vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center content vertically
  
    '@media (min-width: 300px)': {
      height: "50vh", // Adjust height for medium screens
    },
  
    '@media (min-width:400px)': {
      height: "70vh", // Adjust height for large screens
    },
  
    '@media (min-width: 648px)': {
      height: "90vh", // Adjust height for extra-large screens
    },
  };

  const getInitials = (name) => {
    const parts = name.split(" ");
    const initials =
      parts[0].charAt(0) +
      (parts.length > 1 ? parts[parts.length - 1].charAt(0) : "");
    return initials;
  };

  const handleLogout = () => {
    setUser(null);
    router.push("/Auth/Login");
  };

  const userInitials = user ? getInitials(user.username) : '';

  const avatarStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#007BFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontSize: "70px",
    marginBottom: "10px", // Add margin for spacing
  
    '@media (min-width: 600px)': {
      width: "80px",
      height: "80px",
      fontSize: "80px",
    },
  
    '@media (min-width: 768px)': {
      width: "100px",
      height: "100px",
      fontSize: "100px",
    },
  
    '@media (min-width: 1024px)': {
      width: "120px",
      height: "120px",
      fontSize: "120px",
    },
  };

  const userInfoStyles = {
    width: "400px",
    backgroundColor: "gray",
    padding: "0px",
    borderRadius: "0px",
    marginTop: "100px",
    marginLeft: "0px",
    height: "200px",
    fontSize: "20px"
  };
  const userInfoStyle = {
    width: "396px",
    backgroundColor: "#e6e6e6",
    padding: "2px",
    borderRadius: "0px",
    marginTop: "0px",
    marginBottom: "0px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height:"50px"
  };
  
  const buttonStyle = {
    marginRight: "320px",
    marginLeft: "5px",
    marginBottom: "10px",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "#e6e6e6",
    color: "#FFF",
    borderRadius: "5px",
    textAlign: "center",
    width:"200px"
  };
  const buttonStyles = {
    marginLeft: "269px",
    marginTop:"10px",
    marginBottom: "10px",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "red",
    color: "#FFF",
    borderRadius: "5px",
    textAlign: "center",
  };
  const increasedFontSize = {
    fontSize: "20px",
    color: "black",
    marginLeft:"5px",
    alignItems: "center",
    justifyContent:"center"
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
  const handleMyAccountClick = () => {
    // Define the logic you want to execute when My Account is clicked
    // For example, you can navigate to the My Account page using the router
    router.push("/components/myaccount");
  };

  return (
    <div style={backgroundStyles}>
      <div
        style={{
          width: "450px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height:"300"
        }}
      >
        <div style={userInfoStyles}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <button style={buttonStyles} onClick={handleLogout}>
              Logout
            </button>
            <div style={avatarStyle}>{userInitials}</div>

            <h1 style={{ marginTop: "2px", color: "white",marginBottom:"5px" }}>
              {user.username}
            </h1>
          </div>
        </div>
        <div style={userInfoStyle}>
          <p style={increasedFontSize}>
            Email: {user.email}
            <MdModeEdit style={{ marginLeft: "100px" }} />
          </p>
        </div>
        <div style={userInfoStyle}>
          <p style={increasedFontSize}>
            Phone No: {user.referralId}
            <MdModeEdit style={{ marginLeft: "200px" }} />
          </p>
        </div>
        <div style={userInfoStyle}>
          <p style={increasedFontSize}>
            Available Balance: ₹{user.available}
            <Link href="/Auth/withdrawal">
              <BiMoneyWithdraw style={{ marginLeft: "140px" }} />
            </Link>
          </p>
        </div>
        <div style={userInfoStyle}>
          <p style={increasedFontSize}>
            Referral ID: {user.referralId}
            {/* Share icon */}
            <ImShare2  style={{ marginLeft: "185px" }} />
          </p>
        </div>
        <div style={userInfoStyle}>
          <Link href="/about-us">
            <button style={buttonStyle}>
              <div style={increasedFontSize}>About Us</div>
            </button>
          </Link>
        </div>

        <div style={userInfoStyle}>
          <Link href="/contact-us">
            <button style={buttonStyle}>
              <div style={increasedFontSize}>Contact Us</div>
            </button>
          </Link>
        </div>

        <div style={userInfoStyle}>
          <Link href="/feedback">
            <button style={buttonStyle}>
              <div style={increasedFontSize}>Feedback</div>
            </button>
          </Link>
        </div>

        <div style={userInfoStyle}>
          <Link href="/Auth/transactionhistory">
            <button style={buttonStyle}>
              <div style={increasedFontSize}>Transaction History</div>
            </button>
          </Link>
        </div>

        
        <div style={{ ...userInfoStyle, marginBottom: '100px' }}>
          <Link href="/settings">
            <button style={buttonStyle}>
              <div style={increasedFontSize}>Settings</div>
            </button>
          </Link>
        </div>
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
              <Link href="/">
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
  );
};

export default MyAccount;
