import { useState } from "react";
import axios from "axios";

export default function CreateTest() {

    const handleCreateAdmin = async () => {
        try {
            const res = await axios.post(
                `http://localhost:5173/api/${form.role}/create-test`
            );
            alert(res.data);
        } catch (err) {
            alert("Error creating admin");
        }
    };

    const [form, setForm] = useState({
        role: "admin"
    });
    
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
    };

    const roleLabels = {
        admin: "Admin",
        coach: "Coach",
        player: "Player",
        parent: "Parent",
    };

    return (
       <div className="flex items-center gap-4">
  
  <select
    name="role"
    onChange={handleChange}
    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2d245]"
  >
    <option value="admin">Admin</option>
    <option value="coach">Coach</option>
    <option value="player">Player</option>
    <option value="parent">Parent</option>
  </select>

  <button
    onClick={handleCreateAdmin}
    className="bg-[#323b1a] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
  >
    Create Test {roleLabels[form.role]}
  </button>

</div>
    );
}