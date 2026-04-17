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
        `http://localhost:5000/api/user/login`,
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
      {/* <select name="userType" onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="coach">Coach</option>
        <option value="player">Player</option>
        <option value="parent">Parent</option>
      </select> */}
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
      <button type="submit">Login</button>
    </form>
  );
}