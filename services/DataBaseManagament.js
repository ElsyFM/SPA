const Player = require("../models/Player");
const Parent = require("../models/Parent");
const Coach = require("../models/Coach");
const Admim = require("../models/Admin");

class DataBaseManagement {

  // ================= USERS =================

  async getUser(userID, adminID) {
    // check adminID permissions here
    return await Parent.findById(userID);
  }

  async addUser(userID, password, adminID) {
    return await Parent.create({
      _id: userID,
      password: password
    });
  }

  async removeUser(userID, adminID) {
    return await Parent.findByIdAndDelete(userID);
  }

  async editUser(user, userID) {
    return await Parent.findByIdAndUpdate(userID, user, { new: true });
  }

  // ================= TEAMS =================

  async getTeam(teamID, userID) {
    // depends how you store teams (maybe inside user?)
    return await Parent.findOne({ _id: userID, team: teamID });
  }

  async addTeam(teamID, userID) {
    return await Parent.findByIdAndUpdate(
      userID,
      { team: teamID },
      { new: true }
    );
  }

  async removeTeam(teamID, userID) {
    return await Parent.findByIdAndUpdate(
      userID,
      { $unset: { team: "" } },
      { new: true }
    );
  }

  async editTeam(teamID, userID) {
    return await Parent.findByIdAndUpdate(
      userID,
      { team: teamID },
      { new: true }
    );
  }

  // ================= PLAYERS =================

  async getPlayer(playerID) {
    return await Player.findById(playerID);
  }

  async addPlayer(userID, password, name, age, logs, adminID) {
    return await Player.create({
      user: userID,
      password: password,
      name: name,
      age: age,
      logs: logs
    });
  }

  async removePlayer(playerID, adminID) {
    return await Player.findByIdAndDelete(playerID);
  }

  // ================= PLAYER LOGS =================

  async addPlayerLog(playerID, log, userID) {
    return await Player.findByIdAndUpdate(
      playerID,
      { $push: { logs: log } },
      { new: true }
    );
  }

  async updatePlayerLog(playerID, logID, updatedLog, userID) {
    return await Player.updateOne(
      { _id: playerID, "logs._id": logID },
      { $set: { "logs.$": updatedLog } }
    );
  }

  async deletePlayerLog(playerID, logID, userID) {
    return await Player.findByIdAndUpdate(
      playerID,
      { $pull: { logs: { _id: logID } } },
      { new: true }
    );
  }
}

module.exports = new AppService();