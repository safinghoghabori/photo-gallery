const express = require("express");
const cors = require("cors");
const app = express();
const databaseConfiguration = require("./config/database.js");
const photogalleryRoute = require("./routers/photogallery.routes.js");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

// Connecting to mongodb database
databaseConfiguration();

// Using photogallery routes
app.use("/api", photogalleryRoute);

if (process.env.NODE_ENV == "PRODUCTION") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  `Server is running at port ${PORT}...`;
});
