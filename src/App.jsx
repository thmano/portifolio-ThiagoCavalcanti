import "./App.css";
import Home from "./home";
import Menu from "./menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import About from "./about";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
