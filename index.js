const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connection = require("./db/dbConfig");
const compress = require("compression");
const express = require("express");

dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const mongo = process.env.MONGO_URI;
const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
const blogRouter = require("./routes/blogRoute");
app.use(compress());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",blogRouter);
app.get('/', (req, res) => res.send({ message: "This is docNbrand server!" }));

app.listen(port, () => {
  connection();
  console.log(`Server is running on port ${port}`);
});
