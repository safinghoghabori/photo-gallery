import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import UpdateImage from "./UpdateImage";

const DisplayImages = () => {
  const [imagesList, setImagesList] = useState([]);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => {
        setImagesList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  const updateHandler = () => {
    setUpdate(!update);
  };

  const closeHandler = () => {
    setId("");
    setModal(false);
  };

  const editHandler = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const deleteHandler = (e) => {
    console.log(e.target.name);
    axios.delete(`/api/delete/${e.target.name}`);
    setImagesList((data) => {
      return data.filter((image) => image._id !== e.target.name);
    });
  };

  return (
    <section className="gallery-Container">
      <Link to="/add-new" className="gallery-btn-new">
        <button className="gallery-btn">Add New Image</button>
      </Link>

      <section className="gallery-data">
        <ul className="gallery-list-block">
          {imagesList.map((image, idx) => (
            <ImageCard
              key={idx}
              data={image}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          <div className="update-gallery-data">
            <p onClick={closeHandler} className="close">
              &times;
            </p>

            <UpdateImage
              _id={id}
              closeHandler={closeHandler}
              updateHandler={updateHandler}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </section>
  );
};

export default DisplayImages;
