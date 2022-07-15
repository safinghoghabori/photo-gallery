const express = require("express");
const router = express.Router();

const {
  listAllImages,
  getImageDetails,
  addNewImage,
  updateImage,
  deleteImage,
} = require("../controllers/photogallery.controller.js");

router.get("/", listAllImages);

router.post("/new", addNewImage);

router.get("/show/:id", getImageDetails);

router.put("/edit/:id", updateImage);

router.delete("/delete/:id", deleteImage);

module.exports = router;
