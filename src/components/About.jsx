//DEPENDENCIES
import Me from "../assets/me.jpeg"
//Styling
import "../styles/About.css"
function About() {
  return (
    <div className="about-main-container">
      <div className="about-background">
        <img className="aboutMe-img" src={Me} alt="background"></img>
        <div className="overlay">
          <h1 className="about-title">Hey, I'm Sarai.</h1>
          <section className="professional-summary">
        {/* <h2>Professional Summary</h2> */}

        {/* paragraph one */}
        <p className="para1"> I'm a design-minded force driven by curiosity, a love for storytelling, and a passion for solving problems. I thrive on blending artistry with strategy, whether it’s brainstorming marketing campaigns, cracking a complex coding challenge, or finding the perfect way to organize. Life, much like my career, is a dynamic mix of creativity, precision, and just the right amount of learning to keep things exciting. </p>

        {/* paragraph two */}
        <p className="para2">Bridging my marketing and technical expertise has become my superpower. The ability to understand user behavior, design visually appealing interfaces, and optimize functionality equips me to thrive in roles that demand both strategic and technical prowess. Whether it's leveraging my storytelling skills to design engaging user interfaces or using analytical thinking to solve coding challenges, I excel at connecting the dots between what users need and want.</p>

        {/* paragraph three */}
        <p className="para3"> Software engineering came into my life and changed the game. I discovered a new playground where creativity and logic collide. In projects like Happiness Exchange, I didn’t just code; I designed entire systems to solve complex problems, from crafting a scalable backend with PostgreSQL and Firebase Auth to ensuring every pixel of the user interface had a purpose. Moroever, I scaled my project mangement skills through the aid of SMART and agile methodologies. Coding isn’t just a skill—it’s my language for storytelling in the digital age.</p>

        {/* paragraph four */}
        <p className="para4"> I approach every challenge with precision, a sense of humor, and a belief that there’s always a way forward.</p>
        
        {/* paragraph five */}
        <p className="para5"> When I’m not knee-deep in a project, you can find me drawing inspiration from fashion, history, and math (because geometry, let’s be real, is lowkey amazing). I’m also the type to organize a messy codebase—or a spice rack—with the same energy I bring to brainstorming my next big idea.</p>
        
        {/* paragraph six */}
        <p className="para6"> My journey has been anything but linear, and that’s exactly how I like it. Every twist, every challenge, every late-night brainstorm has shaped me into a dynamic, resourceful problem-solver who’s ready to tackle the next big thing. Let’s create something unforgettable together. </p>

        {/* paragraph seven */}
        <p className="para7"> I’m not just building applications; I’m building connections between people and technology in meaningful ways. 
        </p>
          </section>
        <section className="skills-container">
          <h2>Core Skills & Technologies:</h2>
          <ul className="tech-skills">
            <h3>Technological Skills</h3>
            <li>Frontend: JavaScript (ES5 & ES6), React(including Hooks & Context API), Redux Toolkit, Next.js, Bootstrap</li>
            <li>Backend: Node.js, Express, REST APIs</li>
            <li>DevOps: Netlify, Github Actions, Render</li>
            <li>Databases: Firebase, PostgreSQL</li>                                    
            <li>Testing: Jest, Cypress, Postman</li>
          </ul>
          <ul>
            <h3>Design & Strategy</h3>
            <li>UI/UX: Figma, Adobe XD, wireframing, interactive prototyping</li>
            <li>Responsive Web Design: Mobile-first development, CSS Grid, Flexbox, CSS Libraries </li>
            <li>Accessibility: WCAG compliance, semantic HTML </li>
            <li>SEO & Analytics: Google Analytics, Core Web Vitals, Lighthouse reports, A/B testing</li>
          </ul>
          <ul>
            <h3>Project Management</h3>
            <li>Agile Methodlogies: Kanban, Scrum</li>
            <li>Collaborative Tools: Trello, Asana, Jira, Slack, Notion, Github</li>
            <li>Leadership: cross-functional team facilitation, stakeholder communication</li>
          </ul>
          <ul>
            <h3>Creative Tools</h3>
            <li>Canva</li>
            <li>Adobe Creative Suite & Other Video & Photo Editing Software</li>
          </ul>
        </section>
        </div>
      </div>
    </div>
  )
}
export default About   