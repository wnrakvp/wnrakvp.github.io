import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import InformationBar from "./components/InformationBar";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <div className="relative px-10">
        <NavBar />
        <div className="lg:flex">
          <Profile />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={<Content title="About Me" component="about" />}
              />
              <Route
                path="/resume"
                element={<Content title="Resume" component="resume" />}
              />
              <Route
                path="/project"
                element={<Content title="Project" component="project" />}
              />
              <Route
                path="/contact"
                element={<Content title="Contact" component="contact" />}
              />
            </Routes>
          </AnimatePresence>
        </div>
        <InformationBar />
      </div>
    </div>
  );
}

export default App;
