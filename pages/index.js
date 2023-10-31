import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <nav
          style={{ backgroundColor: "#e3f2fd" }}
          className="navbar navbar-expand-lg"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Available Balance
            </a>
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
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Aecent
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Parity
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Sapre
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Bcone
          </a>
        </li>
      </ul>
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
            <a href="/refer-and-earn">
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
            <a href="/pay-now">
              <Image src="/Pay Now.jpg" alt="Image 2" width={60} height={60} />
              <p>Pay Now</p>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/my-account">
              <Image
                src="/My Account.png"
                alt="Image 3"
                width={50}
                height={50}
              />
              <p>My Account</p>
            </a>
          </div>
        </div>
        <div>
          <p>&copy; 2023 YourWebsite. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
