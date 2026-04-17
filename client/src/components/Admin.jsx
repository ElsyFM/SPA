import DataBaseManagement from "../../../services/DataBaseManagament";
import { useState, useEffect } from "react";

export default function Admin() {
  const [permLevel, setPermLevel] = useState(
    Number(localStorage.getItem("permLevel"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPermLevel(Number(localStorage.getItem("permLevel")));
    }, 200);

    return () => clearInterval(interval);
  }, []);

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
    // setUserDeletionForm({
    //   username = e.target.value
    // });
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
  };

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

  if (permLevel !== 1) return null;

  return (
    <div>
      <div>
        <form onSubmit={handleAdminCreation}>
        <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleAdminCreationChange}
        />
        <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleAdminCreationChange}
        />
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleAdminCreationChange}
        />
        <button type="submit">Create Admin</button>
        </form>
      </div>

      <div>
        <form onSubmit={handleCoachCreation}>
        <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleCoachCreationChange}
        />
        <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleCoachCreationChange}
        />
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleCoachCreationChange}
        />
        <input
            name="team"
            type="text"
            placeholder="Team"
            onChange={handleCoachCreationChange}
        />
        <button type="submit">Create Coach</button>
        </form>
      </div>

      <div>
        <form onSubmit={handlePlayerCreation}>
        <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handlePlayerCreationChange}
        />
        <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handlePlayerCreationChange}
        />
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePlayerCreationChange}
        />
        <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handlePlayerCreationChange}
        />
        <input
            name="position"
            type="text"
            placeholder="Position"
            onChange={handlePlayerCreationChange}
        />
        <input
            name="team"
            type="text"
            placeholder="Team"
            onChange={handlePlayerCreationChange}
        />
        <button type="submit">Create Player</button>
        </form>
      </div>

      <div>
        <form onSubmit={handleUserDeletion}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleUserDeletionChange}
        />
        <button type="submit">Delete User</button>
        </form>
      </div>
    </div>
  );
}