
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">F1 Dashboard</Link>
      <div className="navbar-links">
        <Link to="/">Standings</Link>
        <Link to="/history">History</Link>
        <Link to="/teams">Teams</Link>
      </div>
    </nav>
  );
}

export default Navbar;