import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Button from "./UI/Button/Button";
import Cards from "./Components/Card/Card";
import Pagination from "./Components/Pagination/Pagination";
import { getImages } from "./Services/Api";
import "./App.css";

function Index() {
  const [query, setQuery] = useState("nature");
  const [searchTerm, setSearchTerm] = useState("nature");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const perPage = 20;

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getImages(searchTerm, page);
        setImages(data.hits || []);
        const total = data.totalHits || 0;
        setTotalPages(Math.max(1, Math.ceil(total / perPage)));
      } catch (err) {
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    setSearchTerm(value);
    setPage(1);
    setSelected(null);
  };

  const downloadImage = async (imageObj) => {
    const targetImage = imageObj || selected;
    if (!targetImage) return;

    try {
      const response = await fetch(targetImage.largeImageURL);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${targetImage.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const openDetail = (image) => {
    setScrollPosition(window.scrollY);
    setSelected(image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const closeDetail = () => {
    setSelected(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
    }, 0);
  };

  return (
    <>
      <Navbar 
        query={query} 
        setQuery={setQuery} 
        onSearch={handleSearch} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="pixabay-main">
        <section className="gallery-wrap">
          {loading && <div className="info">Loading…</div>}
          {error && <div className="info error">{error}</div>}

          {selected ? (
            <div className="detail-view">
              <div className="detail-image-panel">
                <Button text="Back to results" onClick={closeDetail} className="back-button" />
                <img className="detail-image" src={selected.largeImageURL} alt={selected.tags} />
                <div className="detail-description">
                  <h2>{selected.tags}</h2>
                  <p className="detail-author">By: {selected.user}</p>
                  <div className="tag-list detail-tags">
                    {selected.tags.split(",").map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="detail-sidebar">
                <div className="profile-card">
                  <img 
                    src={selected.userImageURL || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"} 
                    alt={selected.user} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                    }}
                  />
                  <div>
                    <p className="profile-name">{selected.user}</p>
                    <p className="profile-subtitle">Free for use · Pixabay License</p>
                  </div>
                </div>

                <div className="detail-tags-card">
                  <h3>TAGS</h3>
                  <div className="tag-list wrap">
                    {selected.tags.split(",").map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-value">{selected.views.toLocaleString()}</span>
                    <span className="stat-label">VIEWS</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">{selected.likes.toLocaleString()}</span>
                    <span className="stat-label">LIKES</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">{selected.downloads.toLocaleString()}</span>
                    <span className="stat-label">DOWNLOADS</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">{selected.comments.toLocaleString()}</span>
                    <span className="stat-label">COMMENTS</span>
                  </div>
                </div>

                <div className="download-card">
                  <Button text="Download Image" onClick={() => downloadImage(selected)} className="download-button" />
                </div>

                <div className="detail-info-card">
                  <div className="info-row">
                    <span>Dimensions:</span>
                    <strong>{selected.imageWidth} × {selected.imageHeight}</strong>
                  </div>
                  <div className="info-row">
                    <span>Image ID:</span>
                    <strong>{selected.id}</strong>
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <>
              <div className="grid">
                {images.map((img) => (
                  <Cards key={img.id} image={img} openDetail={openDetail} downloadImage={downloadImage} />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Index;
