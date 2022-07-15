const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const databaseURL = process.env.DATABASE_URL;

const databaseConfiguration = async () => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    ("Database connected...");
  } catch (error) {
    error;
    process.exit(1);
  }
};

module.exports = databaseConfiguration;
