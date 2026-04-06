import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Administrator from "./pages/Administrator";
import Coach from "./pages/Coach";
import Parent from "./pages/Parent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<Administrator />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </Router>
  );
}

export default App;