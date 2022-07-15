const ImageCard = ({ data, deleteHandler, editHandler }) => {
  const { _id, imageName, imageUrl, imageDetails } = data;

  return (
    <li key={_id}>
      <div className="title-description">
        <img src={imageUrl} height={200} width={240} />
        <h2>{imageName}</h2>
        <p>{imageDetails}</p>
      </div>

      <div className="gallery-btn-container">
        <button name={_id} className="gallery-btn" onClick={editHandler}>
          🖊
        </button>
        <button name={_id} className="gallery-btn" onClick={deleteHandler}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default ImageCard;
