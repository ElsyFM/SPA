import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import CreateTest from "../components/CreateTest";
import SignIn from "../components/SignIn";
import Admin from "../components/Admin";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <CreateTest />
      <SignIn />
      <Admin />
    </div>
  );
}