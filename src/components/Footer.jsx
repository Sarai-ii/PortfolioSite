import { Link, useLocation } from 'react-router-dom';
//Styling
import '../styles/Footer.css'
function Footer() {
  const location = useLocation();

//   // Do not render the Footer on the home page
//   if (location.pathname === "") {
//     return null;
//   }
  return (
    <nav className='footer-container'>
      {/* <ul className='list-container'>
        <li id="menu-icon" className="list-item">☰
        </li>
        <li className='footer-list'>
          <Link className="list-item" to="/">Home</Link>
        </li>
        <li className='footer-list'>
          <Link className="list-item" to="/about">About</Link>
        </li>
        <li className='footer-list'>
          <Link className="list-item" to="/projects">Projects</Link>
        </li>
        <li className='footer-list'>
          <Link className="list-item" to="/contact">Contact</Link>
        </li>                  
      </ul> */}
    </nav>
  );
}
export default Footer;