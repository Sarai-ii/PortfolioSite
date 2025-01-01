//Dependencies
import About from './About'
//Styling
import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="homePage-container">
      <main className="home-main-container">
        <h1>
          <Link 
          to={'/about'}
          className="home-name">
          SARAI THOMAS
          </Link>
        </h1>
        <p className="home-intro-text"> Welcome to my portfolio, click my name to learn more about my journey into Tech. </p>
      </main>
    </div>
  )
}
export default Home