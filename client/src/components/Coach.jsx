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

        <div>
            <div>
                <br></br>
                <p>========================================================</p>
                <p>COACH DASHBOARD</p>
            </div>

            <div>
                <form onSubmit={handleTeamView}>
                <input
                name="teamName"
                type="text"
                placeholder="Team Name"
                onChange={handleTeamViewChange}
                />
                <button type="submit">View Team</button>
                </form>
            </div>

            {viewedTeam && (
                <div>
                    <h3>Team Details</h3>
                    <ul>
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

            <div>
                <form onSubmit={handleTeamEdit}>
                <input
                name="teamName"
                type="text"
                placeholder="Team Name"
                onChange={handleTeamEditChange}
                />
                <input
                name="numPlayers"
                type="number"
                placeholder="Number of Players"
                onChange={handleTeamEditChange}
                />
                <input
                name="numWins"
                type="number"
                placeholder="Number of Wins"
                onChange={handleTeamEditChange}
                />
                <input
                name="numLosses"
                type="number"
                placeholder="Number of Losses"
                onChange={handleTeamEditChange}
                />
                <input
                name="numTies"
                type="number"
                placeholder="Number of Ties"
                onChange={handleTeamEditChange}
                />
                <button type="submit">Edit Team</button>
                </form>
            </div>

            <div>
                <form onSubmit={handlePlayerView}>
                <input
                name="name"
                type="text"
                placeholder="Player Name"
                onChange={handlePlayerViewChange}
                />
                <button type="submit">View Player</button>
                </form>
            </div>

            {viewedPlayer && (
                <div>
                    <h3>Player Details</h3>
                    <ul>
                        <li>Name: {viewedPlayer.name}</li>
                        <li>Age: {viewedPlayer.age}</li>
                        <li>Position: {viewedPlayer.position}</li>
                        <li>Team: {viewedPlayer.team}</li>
                    </ul>

                {viewedPlayer?.logs?.length > 0 && (
                    <div>
                        <h4>Logs</h4>
                        <ul>
                        {viewedPlayer.logs.map((log, index) => (
                            <li key={index}>
                            Date: {new Date(log.date).toLocaleString()} |
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
            

            <form onSubmit={handleLogEdit}>
                <input name="name" placeholder="Player Name" onChange={handleLogChange} />

                Attendence: {" "}
                <input name="attendance" type="checkbox" onChange={(e) =>
                    setLogForm({ ...LogForm, attendance: e.target.checked })
                } />

                <input name="playTime" type="number" placeholder="Play Time" onChange={handleLogChange} />
                <input name="PAC" type="number" placeholder="PAC" onChange={handleLogChange} />
                <input name="SHO" type="number" placeholder="SHO" onChange={handleLogChange} />
                <input name="PAS" type="number" placeholder="PAS" onChange={handleLogChange} />
                <input name="DRI" type="number" placeholder="DRI" onChange={handleLogChange} />
                <input name="DEF" type="number" placeholder="DEF" onChange={handleLogChange} />
                <input name="PHY" type="number" placeholder="PHY" onChange={handleLogChange} />

                <button type="submit">Add Log</button>
            </form>
        </div>

    );
}