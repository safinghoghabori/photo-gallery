const PhotoGallery = require("../models/models.js");

exports.addNewImage = (req, res) => {
  PhotoGallery.create(req.body)
    .then((result) => {
      result;

      res.json({
        msg: "Cheers!! You have successfully added Image",
        result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        msg: "Sorry, image can not be added",
        error: error.message,
      });
    });
};

exports.listAllImages = (req, res) => {
  PhotoGallery.find()
    .then((result) => {
      result;
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({
        msg: "There isnt any image available",
        error: error.message,
      });
    });
};

exports.getImageDetails = (req, res) => {
  PhotoGallery.findById(req.params.id)
    .then((result) => {
      result;

      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({
        msg: "There isnt any image available",
        error: error.message,
      });
    });
};

exports.updateImage = async (req, res) => {
  try {
    const imageAfterUpdate = await PhotoGallery.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    imageAfterUpdate;

    res.json({
      msg: "Cheers!! You have successfully updated image",
      imageAfterUpdate,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Sorry your image cannot be updated",
      error: error.message,
    });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const afterDeleteImage = await PhotoGallery.findByIdAndRemove(
      req.params.id
    );
    afterDeleteImage;

    res.json({
      msg: "Cheers!! You have successfully deleted image",
      afterDeleteImage,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Sorry image is not there",
      error: error.message,
    });
  }
};
