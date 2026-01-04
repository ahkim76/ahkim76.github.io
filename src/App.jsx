import "./App.css";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
