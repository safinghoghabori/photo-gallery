import { useState, useEffect } from "react";
import axios from "axios";

const UpdateImage = ({ _id, closeHandler, updateHandler }) => {
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageDetails, setImageDetails] = useState("");

  useEffect(() => {
    axios
      .get(`/api/show/${_id}`)
      .then((res) => {
        setImageName(res.data.imageName);
        setImageUrl(res.data.imageUrl);
        setImageDetails(res.data.imageDetails);
      })
      .catch((error) => {
        console.log(error.msg);
      });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/edit/${_id}`, {
        imageName,
        imageUrl,
        imageDetails,
      });
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        submitHandler(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="name" className="label">
        Image Name
      </label>
      <input
        type="text"
        name="imageName"
        className="input"
        value={imageName}
        onChange={(e) => setImageName(e.target.value)}
        required
      />

      <label htmlFor="url" className="label">
        Image URL
      </label>
      <input
        type="text"
        name="title"
        className="input"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <label htmlFor="url" className="label">
        Image Details
      </label>
      <input
        type="text"
        name="imageDetails"
        className="input"
        value={imageDetails}
        onChange={(e) => setImageDetails(e.target.value)}
        required
      />

      <button type="submit" className="gallery-btn">
        ➕ Add
      </button>
    </form>
  );
};

export default UpdateImage;
