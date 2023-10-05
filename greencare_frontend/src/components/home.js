import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>home</h1>
    </div>
  );
}
