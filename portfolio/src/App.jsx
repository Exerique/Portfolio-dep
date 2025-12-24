import './App.css';
import TopHead from "./topHead/topHead";
import TiltCard from './TiltCard/TiltCard';
import reactpng from './assets/react.svg';
import pythonpng from './assets/python.png';
import InteractiveCard from './InteractiveCard/InteractiveCard';
import homepage from './assets/Home Page 1.png'
function App() {
  return (
    <div className="app-container">
      <TopHead />
      <section className="content-section">
        <div className="cards-container">
          <TiltCard
            cornerColor="#61dafb"
            backContent={
              <>
                <h3>React Details</h3>
                <p>Experience building modern web applications with React, including hooks, state management, and component-based architecture.</p>
              </>
            }
          >
            <h3>React: </h3>
            <p>Decent proficiency</p>
            <img src={reactpng} alt="React logo"></img>
          </TiltCard>
          <TiltCard
            cornerColor="#ffd43b"
            backContent={
              <>
                <h3>Python Details</h3>
                <p>Familiar with Python for scripting, automation, and basic application development.</p>
              </>
            }
          >
            <h3>Python</h3>
            <p>Average Know-how</p>
            <img src={pythonpng} alt="Python logo"></img>
          </TiltCard>
          <TiltCard
            cornerColor="#1e3a8a"
            backContent={
              <>
                <h3>Project Details</h3>
                <p>A full-featured mock airline website with booking functionality, user authentication, and responsive design.</p>
              </>
            }
          >
            <h3>Project</h3>
            <p>Mock Airline Website</p>
            <img src={homepage} alt="Home page preview" className="project-preview"></img>
          </TiltCard>
        </div>
      </section>
    </div>
  )
}

export default App
