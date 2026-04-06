import { useState } from "react";
import POSC from "../assets/POSC.png";

export default function Administrator() {
  const [input, setInput] = useState("");

  const addUser = () => {
    alert("User added: " + input);
  };

  const removeUser = () => {
    alert("User removed: " + input);
  };

  const createTeam = () => {
    alert("Team created: " + input);
  };

  return (
    <div className="bg-[#c2d245] min-h-screen">

      {}
      <section className="pt-12 pb-12">
        <div className="px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="py-32 px-16 bg-white shadow-lg rounded-xl flex flex-col">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Admin Dashboard
              </h1>
              <p className="text-2xl text-gray-800">
                Manage users, teams, and system data
              </p>
            </div>

            <div>
              <img
                className="w-full rounded-xl shadow-md"
                src={POSC}
                alt="POSC logo"
              />
            </div>

          </div>
        </div>
      </section>

      
      <div className="bg-white mx-12 mb-12 p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold mb-6">Admin Actions</h2>

        {}
        <input
          type="text"
          placeholder="Enter User ID or Team Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-md"
        />

        {}
        <div className="grid grid-cols-2 gap-4">

          <button onClick={addUser} className="bg-green-500 text-white py-2 rounded">
            Add User
          </button>

          <button onClick={removeUser} className="bg-red-500 text-white py-2 rounded">
            Remove User
          </button>

          <button className="bg-blue-500 text-white py-2 rounded">
            Assign Role
          </button>

          <button onClick={createTeam} className="bg-purple-500 text-white py-2 rounded">
            Create Team
          </button>

          <button className="bg-yellow-500 text-white py-2 rounded">
            Add Team Member
          </button>

          <button className="bg-gray-700 text-white py-2 rounded">
            Remove Team Member
          </button>

        </div>
      </div>

    </div>
  );
}