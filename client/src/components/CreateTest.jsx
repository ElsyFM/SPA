import { useState } from "react";
import axios from "axios";

export default function CreateTest() {

    const handleCreateAdmin = async () => {
        try {
            const res = await axios.post(
                `http://localhost:5000/api/${form.role}/create-test`
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
        <div>
            <select name="role" onChange={handleChange}>
                    <option value="admin">Admin</option>
                    <option value="coach">Coach</option>
                    <option value="player">Player</option>
                    <option value="parent">Parent</option>
            </select>

            <button onClick={handleCreateAdmin}>
                Create Test {roleLabels[form.role]}
            </button>
        </div>
    );
}