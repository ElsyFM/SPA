import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    userType: "admin"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:5001/api/user/login`,
        form
      );


      console.log("LOGIN RESPONSE:", res.data);

      const perm = {
        admin: 1,
        coach: 2,
        player: 3,
        parent: 4
      };

      const permLevel = perm[res.data];

      localStorage.setItem("permLevel", permLevel);

      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit" className="bg-[#323b1a] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">Login</button>
    </form>
  );
}