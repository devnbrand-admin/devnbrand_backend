import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import compress from "compression";
import express from "express";

dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const mongo = process.env.MONGO_URI || "mongodb://localhost:27017/docNbrand";
const corsOptions = { origin: "*", optionssuccessStatus: 200 };

app.use(compress());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use((req, res) => res.send({ message: "This is docNbrand server!" }));

mongoose
  .connect(mongo)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((err) => console.log(err));
