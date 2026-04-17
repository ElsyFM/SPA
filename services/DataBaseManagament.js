import axios from "axios";
// const Player = require("../models/Player");
// const Parent = require("../models/Parent");
// const Coach = require("../models/Coach");
// const Admin = require("../models/Admin");
// // const User = require("../models/User");
// import Player from "../models/Player";
// import Parent from "../models/Parent";
// import Coach from "../models/Coach";
// import Admin from "../models/Admin";
// import User from "../models/User";

class DataBaseManagement {

  // ================= USERS =================

  async getUser(userID) {
    return await User.findById(userID);
  }

  async addUser(form) {
    const res = await axios.post(
      "http://localhost:5000/api/user/create-user",
      form
    );

    return res;
  }

  async removeUser(userID) {
    return await User.findByIdAndDelete(userID);
  }

  async editUser(userID, user) {
    return await User.findByIdAndUpdate(userID, user, { new: true });
  }

  // ================= TEAMS =================

  async addTeam(teamID, userID) {
    return await User.findByIdAndUpdate(
      userID,
      { team: teamID },
      { new: true }
    );
  }

  async removeTeam(teamID, userID) {
    return await User.findByIdAndUpdate(
      userID,
      { $unset: { team: "" } },
      { new: true }
    );
  }

  // ================= PLAYERS =================

  async getPlayer(playerID) {
    return await Player.findById(playerID);
  }

  async addPlayer(data) {
    return await Player.create(data);
  }

  async removePlayer(playerID) {
    return await Player.findByIdAndDelete(playerID);
  }

  // ================= PLAYER LOGS =================

  async addPlayerLog(playerID, log) {
    return await Player.findByIdAndUpdate(
      playerID,
      { $push: { logs: log } },
      { new: true }
    );
  }

  async updatePlayerLog(playerID, logID, updatedLog) {
    return await Player.updateOne(
      { _id: playerID, "logs._id": logID },
      { $set: { "logs.$": updatedLog } }
    );
  }

  async deletePlayerLog(playerID, logID) {
    return await Player.findByIdAndUpdate(
      playerID,
      { $pull: { logs: { _id: logID } } },
      { new: true }
    );
  }
}

const instance = new DataBaseManagement();

export default instance;