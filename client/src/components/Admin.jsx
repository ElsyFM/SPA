import { addUser }
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

  


  if (permLevel !== 1) return null;

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
        <input
            name="name"
            type="name"
            placeholder="Name"
            onChange={handleChange}
        />
        <input
            name="username"
            type="username"
            placeholder="Username"
            onChange={handleChange}
        />
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
        />
        <button type="submit">Create Admin</button>
        </form>
      </div>

      <div>This is also visible!</div>
    </div>
  );
}