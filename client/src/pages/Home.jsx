import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Admin from "../components/Admin";
import Coach from "../components/Coach";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  const [permLevel, setPermLevel] = useState(
      Number(localStorage.getItem("permLevel"))
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPermLevel(Number(localStorage.getItem("permLevel")));
      }, 200);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      {permLevel === 1 && <Admin />}
      {(permLevel === 1 || permLevel === 2) && <Coach />}
    </div>
  );
}