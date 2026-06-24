import Button from "../../UI/Button/Button";

function Cards({ image, openDetail, downloadImage }) {
  const tags = image.tags ? image.tags.split(",").map((tag) => tag.trim()) : [];

  const handleDownload = (e) => {
    e.stopPropagation();
    if (downloadImage) downloadImage(image);
  };

  return (
    <article className="card" onClick={() => openDetail(image)}>
      <div className="card-hero">
        <img src={image.webformatURL} alt={image.tags} />
      </div>
      <div className="card-body">
        <p className="card-title">{image.tags}</p>
        <p className="card-author">By {image.user}</p>
        <div className="tag-list card-tags">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-stats">
            <span>❤ {image.likes}</span>
            <span>👁 {image.views}</span>
          </div>
          <Button text="Download ⬇" onClick={handleDownload} className="card-download-btn" />
        </div>
      </div>
    </article>
  );
}

export default Cards;
