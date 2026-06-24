import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

function Navbar({ query, setQuery, onSearch, theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>PIXABAY</h1>
      </div>
      <div className="nav-controls" style={{ display: 'flex', gap: '1rem', flex: '1', justifyContent: 'flex-end' }}>
        <form className="nav-search" onSubmit={onSearch} style={{ flex: '0 1 680px' }}>
          <Input
            className="search-input"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
          />
          <Button type="submit" text="Search" className="search-button" />
        </form>
        <Button 
          text={theme === "dark" ? "☀️" : "🌙"} 
          onClick={toggleTheme} 
          className="theme-button" 
        />
      </div>
    </nav>
  );
}

export default Navbar;
