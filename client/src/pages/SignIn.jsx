import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (username === "admin") {
      navigate("/admin");
    } else if (username === "coach") {
      navigate("/coach");
    } else {
      navigate("/parent");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-sm space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">

        <h2 className="text-xl font-semibold text-white text-center">
          Soccer Player Analyzer Login
        </h2>

        {}
        <div>
          <label className="block text-sm font-medium text-white">
            Username
          </label>
          <input
            type="text"
            placeholder="admin / coach / parent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />
        </div>

        {}
        <div>
          <label className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="anything"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />
        </div>

        {}
        <button
          type="submit"
          className="w-full bg-indigo-500 py-2 rounded-md text-white font-semibold"
        >
          Login
        </button>

      </div>
    </form>
  );
}