import "./App.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Projects from "./components/projects";
import Block from "./components/block";
import { Alfie, Sonny } from "./assets";

function App() {
  const projectRef = useRef(null);
  const introRef = useRef(null);

  function scrollToRef(ref) {
    const domNode = ref.current;
    domNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="app-container">
      <div className="title-container">
        <div className="title-name">MAX KUNZ</div>
        <svg className="arrow" onClick={() => scrollToRef(introRef)}>
          <path className="a1" d="M0 0 L30 22 L60 0"></path>
          <path className="a2" d="M0 20 L30 42 L60 20"></path>
          <path className="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
      </div>
      <div ref={introRef}>
        <Block orient_left={false} img="max_profile.jpeg">
          <div className="title-description">
            <h3> Who am I?</h3>
            <p>
              Hi! My name is Max and I designed this website and worked (or am
              currently working on) on all of the projects{" "}
              <Link
                className="project-inline-link"
                to="/"
                onClick={() => scrollToRef(projectRef)}
              >
                below
              </Link>
              .
            </p>
            <p>
              I love learning new technical concepts and generally interesting
              ideas or facts. I studied Computer Science with a minor in
              History. I have worked in cybersecurity, web development, computer
              science education professionally, and personally, I&apos;m most
              interested in low-level systems like exploring experimental file
              systems and understanding embedded systems.
            </p>
            <p>
              In my free time, I&apos;ve been learning how to bake a variety of
              breads: sourdough, French, brioche, etc. I also play the electric
              bass and I love to read Science Fiction and Fantasy books.
            </p>
            <p>
              I&apos;m the proud father of a stubborn Korean Jindo named Sonny
              who loves his mother over me even though I feed him, walk him, and
              clean up after him.
            </p>
          </div>
        </Block>
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
