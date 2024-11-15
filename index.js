const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connection = require("./db/dbConfig");
const compress = require("compression");
const express = require("express");
const authRoutes = require("./routes/authRoute")
dotenv.config();
const app = express();
const port = process.env.PORT || 3300;
const mongo = process.env.MONGO_URI;
const corsOptions = { origin: "*", optionsSuccessStatus: 200 };
const videoRouter = require("./routes/videoRoute");
const blogRoute = require("./routes/blogRoute");
const contentRoute = require("./routes/contentRoute");
const contactRoute = require("./routes/contact");
app.use(compress());
app.use(morgan("dev"));
app.use(express.json());
app.use(
	cors({
	  origin: "http://localhost:5173",
	  credentials: true, // allow credentials
	})
  );
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/video",videoRouter);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/content", contentRoute);
app.use("/api/v1/contact", contactRoute);
app.get('/', (req, res) => res.send({ message: "This is docNbrand server!" }));

app.listen(port, () => {
  connection();
  console.log(`Server is running on port ${port}`);
});
