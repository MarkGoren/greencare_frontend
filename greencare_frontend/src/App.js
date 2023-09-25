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
import HomeUnlogged from "./components/homeUnlogged";
import { pushRotate as Menu } from "react-burger-menu";
import Footer from "./components/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PrlxWebExplain from "./components/prlxWebExplain";
import ForgotPassword from "./components/forgotPassword";

export const GreencareData = createContext();
function App() {
  const [data, setData] = useState({
    isLogged: false,
  });
  return (
    <div id="outer-container" className="App">
      <GreencareData.Provider value={data}>
        <Navbar></Navbar>

        {data.isLogged ? (
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<PrlxWebExplain />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          </Routes>
        )}
      </GreencareData.Provider>
    </div>
  );
}

export default App;
