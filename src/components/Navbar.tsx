import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Server Engineering</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/fundamentals" className="nav-link">Fundamentals</Link>
          <Link to="/architecture" className="nav-link">Architecture</Link>
          <Link to="/best-practices" className="nav-link">Best Practices</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
