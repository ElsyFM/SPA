import axios from "axios";

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

  async removeUser(form) {
    const res = await axios.post(
      "http://localhost:5000/api/user/delete-user",
      form
    );

    return res;
  }

  async editUser(userID, user) {
    return await User.findByIdAndUpdate(userID, user, { new: true });
  }

  // ================= TEAMS =================

  async addTeam(form) {
    const res = await axios.post(
      "http://localhost:5000/api/team/create-team",
      form
    );

    return res;
  }

  async removeTeam(form) {
    const res = await axios.post(
      "http://localhost:5000/api/team/delete-team",
      form
    );

    return res;
  }

  async editTeam(form) {
    const res = await axios.post(
      "http://localhost:5000/api/team/edit-team",
      form
    );

    return res.data;
  }

  async viewTeam(form) {
    const res = await axios.post(
      "http://localhost:5000/api/team/view-team",
      form
    )

    return res.data;
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