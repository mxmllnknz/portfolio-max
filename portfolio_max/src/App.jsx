import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="title-container">
      <div className="title-name">MAX KUNZ</div>
      <div className="title-description">
        <p>
          Hi! My name is Max and I designed this website and completed all of
          the projects on the <Link to={"/projects"}>Projects</Link> page.
        </p>
        <p>
          I love learning new technical concepts and generally interesting ideas
          or facts. I studied Computer Science with a minor in History. I have
          worked in cybersecurity, web development, computer science education
          professionally, and personally, I&apos;m most interested in low-level
          systems like exploring experimental file systems and understanding
          embedded systems.
        </p>
        <p>
          In my free time, I&apos;ve been learning how to bake a variety of
          breads: sourdough, French, brioche, etc. I also play the electric bass
          and I love to read Science Fiction and Fantasy books.
        </p>
        <p>
          I&apos;m the proud father of a stubborn Korean Jindo named Sonny who
          loves his mother over me even though I feed him, walk him, and clean
          up after him.
        </p>
        <Link to={"/projects"}>View Projects</Link>
      </div>
    </div>
  );
}

export default App;
