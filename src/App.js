import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.module.scss";
import Mdk from "@interlinklabs/mdk";
import Rules from "./pages/rules/Rules";
import MainMenu from "./pages/mainMenu/mainMenu";
import NotFound from "./pages/notFound/NotFound";
import InGame from "./components/inGame/InGame";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
  };

  return (
    <>
      {!isLoggedIn ? (
        <Mdk
          appid="id__de19s0g6gqc7o7e5pbdh"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        >
          {({ open }) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "white",
                  padding: "40px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 style={{ marginBottom: "20px", color: "#333" }}>
                  Welcome!
                </h2>
                <p style={{ marginBottom: "30px", color: "#555" }}>
                  Please log in to access the game.
                </p>
                <button
                  onClick={open}
                  style={{
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Login to Continue
                </button>
              </div>
            </div>
          )}
        </Mdk>
      ) : (
        <Routes>
          <Route path="/inGame" element={<InGame />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/" element={<MainMenu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
