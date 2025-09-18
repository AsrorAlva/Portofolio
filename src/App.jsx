import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import AllProjects from "./pages/AllProject";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero/>
              <div className="h-screen"></div>
              <About/>
              {/* <Skills/> */}
              <div className="h-1"></div>
              <Projects/>
              <div className="h-1"></div>
              <Contact/>
            </>
          }
        />

        {/* Halaman semua project */}
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
