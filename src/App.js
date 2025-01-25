import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.module.scss";
import Mdk from "@interlinklabs/mdk";
import Rules from "./pages/rules/Rules";
import MainMenu from "./pages/mainMenu/mainMenu";
import NotFound from "./pages/notFound/NotFound";
import InGame from "./components/inGame/InGame";
import LoginPage from "./pages/auth/LoginPage";

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
          appid="id__vm92zs5l819cry3exytj"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        >
          {({ open }) => <LoginPage openMdk={open} />}
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
