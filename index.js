import express from "express";
import dotenv from "dotenv";
import process from "process";
import connectDB from "./db.js";
import User from "./models/User.js";
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Route for aggregated user statistics
app.get("/users/stats", async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: "$country",
          totalUsersPerCountry: { $sum: 1 },
          averageAge: { $avg: "$age" },
        },
      },
      {
        $group: {
          _id: null,
          totalUsers: { $sum: "$totalUsersPerCountry" },
          averageAgeOverall: { $avg: "$averageAge" },
          countriesCount: {
            $push: {
              country: "$_id",
              users: "$totalUsersPerCountry",
              averageAge: "$averageAge",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalUsers: 1,
          averageAgeOverall: 1,
          countries: "$countriesCount",
        },
      },
    ]);

    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
