import DataBaseManagement from "../../../services/DataBaseManagament";
import { useState } from "react";

export default function Admin() {

  const [AdminCreationForm, setAdminCreationForm] = useState({
    name: "",
    username: "",
    password: "",
    userType: "admin"
  });

  const [CoachCreationForm, setCoachCreationForm] = useState({
    name: "",
    username: "",
    password: "",
    userType: "coach",
    team: ""
  });

  const [PlayerCreationForm, setPlayerCreationForm] = useState({
    name: "",
    username: "",
    password: "",
    userType: "player",
    age: NaN,
    position: "",
    team: ""
  });

  const [ParentCreationForm, setParentCreationForm] = useState({
    name: "",
    username: "",
    password: "",
    userType: "parent",
    childUsername: ""
  });

  const [UserDeletionForm, setUserDeletionForm] = useState({
    username: ""
  });

  const [TeamCreationForm, setTeamCreationForm] = useState({
    teamName: ""
  });

  const [TeamDeletionForm, setTeamDeletionForm] = useState({
    teamName: ""
  });

  const handleAdminCreationChange = (e) => {
    setAdminCreationForm({
      ...AdminCreationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCoachCreationChange = (e) => {
    setCoachCreationForm({
      ...CoachCreationForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePlayerCreationChange = (e) => {
    setPlayerCreationForm({
      ...PlayerCreationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleParentCreationChange = (e) => {
    setParentCreationForm({
      ...ParentCreationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleUserDeletionChange = (e) => {
    setUserDeletionForm({
      ...UserDeletionForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTeamCreationChange = (e) => {
    setTeamCreationForm({
      ...TeamCreationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleTeamDeletionChange = (e) => {
    setTeamDeletionForm({
      ...TeamDeletionForm,
      [e.target.name]: e.target.value
    });
  };

  const handleAdminCreation = async (e) => {
    e.preventDefault();

    try {
      const res = await DataBaseManagement.addUser(AdminCreationForm);

      console.log("ADMIN CREATION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Admin creation failed");
    }
  }

  const handleCoachCreation = async (e) => {
    e.preventDefault();

    try {
      const res = await DataBaseManagement.addUser(CoachCreationForm);

      console.log("Coach CREATION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Coach creation failed");
    }
  };

  const handlePlayerCreation = async (e) => {
    e.preventDefault();

    try {
      const res = await DataBaseManagement.addUser(PlayerCreationForm);

      console.log("Player CREATION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Player creation failed");
    }
  };

  const handleParentCreation = async (e) => {
    e.preventDefault();

    try {
      const res = await DataBaseManagement.addUser(ParentCreationForm);

      console.log("Parent CREATION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Parent creation failed");
    }
  };

  const handleUserDeletion = async (e) => {
    e.preventDefault();

    try {

      const res = await DataBaseManagement.removeUser(UserDeletionForm);

      console.log("USER DELETION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("User deletion failed");
    }
  };

  const handleTeamCreation = async (e) => {
    e.preventDefault();
    try {
      const res = await DataBaseManagement.addTeam(TeamCreationForm);

      console.log("TEAM CREATION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Team creation failed");
    }
  };

  const handleTeamDeletion = async (e) => {
    e.preventDefault();
    try {
      const res = await DataBaseManagement.removeTeam(TeamDeletionForm);

      console.log("TEAM DELETION RESPONSE:", res.data);

      alert(res.data);
    } catch (err) {
      alert("Team deletion failed");
    }
  };

  return (
    <div className="bg-[#c2d245] min-h-screen py-16 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <div className="mb-12 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Admin Dashboard
      </h1>
      <p className="text-xl text-gray-800">
        Manage users and teams
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Create Admin */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Create Admin</h2>
        <form onSubmit={handleAdminCreation} className="space-y-4">
          <input name="name" placeholder="Name" onChange={handleAdminCreationChange} className="input"/>
          <input name="username" placeholder="Username" onChange={handleAdminCreationChange} className="input"/>
          <input name="password" type="password" placeholder="Password" onChange={handleAdminCreationChange} className="input"/>
          <button className="btn">Create</button>
        </form>
      </div>

      {/* Create Coach */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Create Coach</h2>
        <form onSubmit={handleCoachCreation} className="space-y-4">
          <input name="name" placeholder="Name" onChange={handleCoachCreationChange} className="input"/>
          <input name="username" placeholder="Username" onChange={handleCoachCreationChange} className="input"/>
          <input name="password" type="password" placeholder="Password" onChange={handleCoachCreationChange} className="input"/>
          <input name="team" placeholder="Team" onChange={handleCoachCreationChange} className="input"/>
          <button className="btn">Create</button>
        </form>
      </div>

      {/* Create Player */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Create Player</h2>
        <form onSubmit={handlePlayerCreation} className="space-y-4">
          <input name="name" placeholder="Name" onChange={handlePlayerCreationChange} className="input"/>
          <input name="username" placeholder="Username" onChange={handlePlayerCreationChange} className="input"/>
          <input name="password" type="password" placeholder="Password" onChange={handlePlayerCreationChange} className="input"/>
          <input name="age" type="number" placeholder="Age" onChange={handlePlayerCreationChange} className="input"/>
          <input name="position" placeholder="Position" onChange={handlePlayerCreationChange} className="input"/>
          <input name="team" placeholder="Team" onChange={handlePlayerCreationChange} className="input"/>
          <button className="btn">Create</button>
        </form>
      </div>

      {/* Delete User */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Delete User</h2>
        <form onSubmit={handleUserDeletion} className="space-y-4">
          <input name="username" placeholder="Username" onChange={handleUserDeletionChange} className="input"/>
          <button className="btn bg-red-500 hover:bg-red-600">Delete</button>
        </form>
      </div>

      {/* Create Team */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Create Team</h2>
        <form onSubmit={handleTeamCreation} className="space-y-4">
          <input name="teamName" placeholder="Team Name" onChange={handleTeamCreationChange} className="input"/>
          <button className="btn">Create</button>
        </form>
      </div>

      {/* Delete Team */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Delete Team</h2>
        <form onSubmit={handleTeamDeletion} className="space-y-4">
          <input name="teamName" placeholder="Team Name" onChange={handleTeamDeletionChange} className="input"/>
          <button className="btn bg-red-500 hover:bg-red-600">Delete</button>
        </form>
      </div>

    </div>
  </div>
</div>
  );
}