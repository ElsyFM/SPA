import DataBaseManagement from "../../../services/DataBaseManagament";
import { useState } from "react";

export default function Coach() {

    const [TeamEditForm, setTeamEditForm] = useState({
        teamName: "",
        numGames: NaN,
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
                name="numGames"
                type="text"
                placeholder="Number of Games"
                onChange={handleTeamEditChange}
                />
                <input
                name="numPlayers"
                type="text"
                placeholder="Number of Players"
                onChange={handleTeamEditChange}
                />
                <input
                name="numWins"
                type="text"
                placeholder="Number of Wins"
                onChange={handleTeamEditChange}
                />
                <input
                name="numLosses"
                type="text"
                placeholder="Number of Losses"
                onChange={handleTeamEditChange}
                />
                <input
                name="numTies"
                type="text"
                placeholder="Number of Ties"
                onChange={handleTeamEditChange}
                />
                <button type="submit">Edit Team</button>
                </form>
            </div>
        </div>

    );
}