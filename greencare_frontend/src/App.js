import { createContext, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import PrlxWebExplain from "./components/prlxWebExplain";
import ForgotPassword from "./components/forgotPassword";
import Error from "./components/error";
import { useSelector } from "react-redux";
import ChangePassword from "./components/changePassword";

function App() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <div id="outer-container" className="App">
      <Navbar></Navbar>

      {auth.isLoggedIn ? (
        <Routes>
          {auth.isLoggedIn &&
            window.location.href.includes("/login") &&
            navigate("/")}
          <Route path="/" element={<Home />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<PrlxWebExplain />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/changePassword" element={<ChangePassword />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
