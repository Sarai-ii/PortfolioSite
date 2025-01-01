import { Link, useLocation } from 'react-router-dom';
//Styling
import '../styles/Navbar.css'
function Navbar() {
  const location = useLocation();

  // Do not render the navbar on the home page
  if (location.pathname === "/") {
    return null;
  }
  return (
    <nav className='navbar-container'>
      <ul className='list-container'>
        {/* <li id="menu-icon" className="list-item">☰</li> */}
        <li>
          <Link className="list-item" to="/">Home</Link>
        </li>
        <li>
          <Link className="list-item" to="/about">About</Link>
        </li>
        <li>
          <Link className="list-item" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="list-item" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;