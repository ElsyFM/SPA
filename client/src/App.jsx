// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//         <Navbar />
//         <Hero />
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;