import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/authRoutes.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//Api endpoints
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => console.log("server started on PORT : " + port));
