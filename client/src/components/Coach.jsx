import DataBaseManagement from "../../../services/DataBaseManagament";
import { useState } from "react";

export default function Coach() {

    // TEAM INFO ============================

    const [TeamEditForm, setTeamEditForm] = useState({
        teamName: "",
        numPlayers: NaN,
        numWins: NaN,
        numLosses: NaN,
        numTies: NaN,
        winTieLoss: NaN
    });

    const handleTeamEditChange = (e) => {
        setTeamEditForm({
        ...TeamEditForm,
        [e.target.name]: e.target.value
        });
    };

    const handleTeamEdit = async (e) => {
        e.preventDefault();
        try {
        const res = await DataBaseManagement.editTeam(TeamEditForm);

        console.log("TEAM EDIT RESPONSE:", res.message);

        setViewedTeam(res.team);
        } catch (err) {
        alert("Team edit failed");
        }
    };

    const [TeamViewForm, setTeamViewForm] = useState({
        teamName: ""
    });

    const [viewedTeam, setViewedTeam] = useState(null);

    const handleTeamViewChange = (e) => {
        setTeamViewForm({
        ...TeamViewForm,
        [e.target.name]: e.target.value
        });
    };

    const handleTeamView = async (e) => {
        e.preventDefault();
        try {
        const res = await DataBaseManagement.viewTeam(TeamViewForm);

        console.log("TEAM VIEW RESPONSE:", res.message);

        setViewedTeam(res.team);
        } catch (err) {
        alert("Team view failed");
        }
    };

    // PLAYER INFO ============================

    const [PlayerEditForm, setPlayerEditForm] = useState({
        name: "",
        age: NaN,
        position: "",
        team: ""
    });

    const handlePlayerEditChange = (e) => {
        setPlayerEditForm({
        ...PlayerEditForm,
        [e.target.name]: e.target.value
        });
    };

    const handlePlayerEdit = async (e) => {
        e.preventDefault();
        try {
        const res = await DataBaseManagement.editPlayer(PlayerEditForm);

        console.log("PLAYER EDIT RESPONSE:", res.message);

        setViewedPlayer(res.player);
        } catch (err) {
        alert("PLAYER edit failed");
        }
    };

    const [PlayerViewForm, setPlayerViewForm] = useState({
        name: ""
    });

    const [viewedPlayer, setViewedPlayer] = useState(null);

    const handlePlayerViewChange = (e) => {
        setPlayerViewForm({
        ...PlayerViewForm,
        [e.target.name]: e.target.value
        });
    };

    const handlePlayerView = async (e) => {
        e.preventDefault();
        try {
        const res = await DataBaseManagement.viewPlayer(PlayerViewForm);

        console.log("PLAYER VIEW RESPONSE:", res.message);

        setViewedPlayer(res.player);
        } catch (err) {
        alert("Player view failed");
        }
    };

    const [LogForm, setLogForm] = useState({
        name: "",
        attendance: false,
        playTime: NaN,
        PAC: NaN,
        SHO: NaN,
        PAS: NaN,
        DRI: NaN,
        DEF: NaN,
        PHY: NaN
    });

    const handleLogChange = (e) => {
        setLogForm({
        ...LogForm,
        [e.target.name]: e.target.value
        });
    };

    const handleLogEdit = async (e) => {
        e.preventDefault();
        try {
        const res = await DataBaseManagement.addPlayerLog(LogForm);

        console.log("ADD LOG RESPONSE:", res.message);

        setViewedPlayer(res.player);
        } catch (err) {
        alert("PLAYER edit failed");
        }
    };

    return (

        <div className="bg-[#c2d245] min-h-screen py-16">
  <div className="max-w-7xl mx-auto px-6 space-y-12">

    {/* HEADER */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900">
        COACH DASHBOARD
      </h1>
    </div>

    {/* TEAM VIEW */}
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-semibold">View Team</h2>

      <form onSubmit={handleTeamView} className="flex gap-4">
        <input
          name="teamName"
          type="text"
          placeholder="Team Name"
          onChange={handleTeamViewChange}
          className="border rounded-lg p-3 w-full"
        />
        <button
          type="submit"
          className="bg-[#323b1a] text-white px-6 rounded-lg"
        >
          View
        </button>
      </form>

      {viewedTeam && (
        <div className="mt-6 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Team Details</h3>

          <ul className="space-y-2 text-gray-700">
            <li>Team Name: {viewedTeam.teamName}</li>
            <li>Games Played: {viewedTeam.numGames}</li>
            <li>Players: {viewedTeam.numPlayers}</li>
            <li>Wins: {viewedTeam.numWins}</li>
            <li>Losses: {viewedTeam.numLosses}</li>
            <li>Ties: {viewedTeam.numTies}</li>
            <li>Win/Loss Ratio: {viewedTeam.winTieLoss}</li>
          </ul>
        </div>
      )}
    </div>

    {/* TEAM EDIT */}
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Edit Team</h2>

      <form onSubmit={handleTeamEdit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="teamName" placeholder="Team Name" onChange={handleTeamEditChange} className="border p-3 rounded-lg"/>
        <input name="numPlayers" placeholder="Players" type="number" onChange={handleTeamEditChange} className="border p-3 rounded-lg"/>
        <input name="numWins" placeholder="Wins" type="number" onChange={handleTeamEditChange} className="border p-3 rounded-lg"/>
        <input name="numLosses" placeholder="Losses" type="number" onChange={handleTeamEditChange} className="border p-3 rounded-lg"/>
        <input name="numTies" placeholder="Ties" type="number" onChange={handleTeamEditChange} className="border p-3 rounded-lg"/>

        <button className="bg-[#323b1a] text-white py-3 rounded-lg md:col-span-2">
          Save Changes
        </button>
      </form>
    </div>

    {/* PLAYER VIEW */}
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-semibold">View Player</h2>

      <form onSubmit={handlePlayerView} className="flex gap-4">
        <input
          name="name"
          placeholder="Player Name"
          onChange={handlePlayerViewChange}
          className="border p-3 rounded-lg w-full"
        />
        <button className="bg-[#323b1a] text-white px-6 rounded-lg">
          View
        </button>
      </form>

      {viewedPlayer && (
        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
          <h3 className="text-xl font-semibold">Player Details</h3>

          <ul className="space-y-2">
            <li>Name: {viewedPlayer.name}</li>
            <li>Age: {viewedPlayer.age}</li>
            <li>Position: {viewedPlayer.position}</li>
            <li>Team: {viewedPlayer.team}</li>
          </ul>

          {viewedPlayer?.logs?.length > 0 && (
            <div>
              <h4 className="font-semibold mt-4">Logs</h4>
              <ul className="space-y-2 text-sm">
                {viewedPlayer.logs.map((log, index) => (
                  <li key={index} className="bg-white p-2 rounded-lg">
                    {new Date(log.date).toLocaleString()} |
                    PAC: {log.PAC} |
                    SHO: {log.SHO} |
                    PAS: {log.PAS} |
                    DRI: {log.DRI} |
                    DEF: {log.DEF} |
                    PHY: {log.PHY}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>

    {/* LOG EDIT */}
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-semibold">Add Player Log</h2>

      <form onSubmit={handleLogEdit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input name="name" placeholder="Player Name" onChange={handleLogChange} className="border p-3 rounded-lg md:col-span-3"/>

        <label className="flex items-center gap-2 md:col-span-3">
          <input
            type="checkbox"
            onChange={(e) =>
              setLogForm({ ...LogForm, attendance: e.target.checked })
            }
          />
          Attendance
        </label>

        <input name="playTime" placeholder="Play Time" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="PAC" placeholder="PAC" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="SHO" placeholder="SHO" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="PAS" placeholder="PAS" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="DRI" placeholder="DRI" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="DEF" placeholder="DEF" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>
        <input name="PHY" placeholder="PHY" type="number" onChange={handleLogChange} className="border p-3 rounded-lg"/>

        <button className="bg-[#323b1a] text-white py-3 rounded-lg md:col-span-3">
          Add Log
        </button>
      </form>
    </div>

  </div>
</div>
    );
}