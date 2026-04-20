const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

router.post("/create-team", async (req, res) => {
  try {
    const { teamName } = req.body;

    const team = await Team.findOne({ teamName });
    
    if (team) {
        return res.json("Team already exists");
    }

    const newTeam = await Team.create( { teamName } );

    return res.json("Team creation sucessful")

  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/delete-team", async (req, res) => {
  try {
    const { teamName } = req.body;

    const team = await Team.findOne({ teamName });

    if (!team) {
      return res.json("Team does not exist");
    };

    const delTeam = await Team.findByIdAndDelete(team._id);
    return res.json("Team deletion sucessful", delTeam);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;