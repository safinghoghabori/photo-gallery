const mongoose = require("mongoose");

const PhotoGallerySchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageDetails: {
    type: String,
    required: true,
  },
});

const PhotoGallery = mongoose.model("photogallery", PhotoGallerySchema);

module.exports = PhotoGallery;
