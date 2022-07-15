import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddNewImage = () => {
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageDetails, setImageDetails] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/new", {
        imageName,
        imageUrl,
        imageDetails,
      });

      // Goto home page
      navigate("/");
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <section className="gallery-newImage-container">
      <Link to="/">
        <button type="button" className="gallery-btn gallery-btn-back">
          🔙 Back
        </button>
      </Link>

      <section className="gallery-data">
        <form className="form-container" onSubmit={handleSubmit}>
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
      </section>
    </section>
  );
};

export default AddNewImage;
