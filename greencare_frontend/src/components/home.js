import { useContext } from "react";
import { GreencareData } from "../App";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const data = useContext(GreencareData);
  const navigate = useNavigate();
  if (!data.isLogged) navigate("/login");
  return (
    <div
      className="home"
      style={{
        height: "100vh",
      }}
    >
      home
    </div>
  );
}
