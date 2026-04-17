const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
const playerRoutes = require("./routes/playerRoutes");
app.use("/api/player", playerRoutes);
const parentRoutes = require("./routes/parentRoutes");
app.use("/api/parent", parentRoutes);
const coachRoutes = require("./routes/coachRoutes");
app.use("/api/coach", coachRoutes);
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});