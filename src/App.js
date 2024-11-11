import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";
import Header from "./components/Header";
import AnimalDetail from "./routes/AnimalDetail";
import Story from "./routes/Story";
import './styles/reset.css';

function App() {
  const homeRef = useRef(null);

  const scrollToSection = (section) => {
    if (homeRef.current) {
      homeRef.current.scrollToSection(section);
    }
  };

  return (
    <RecoilRoot>
      <Router>
        <Header onScrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={<Home ref={homeRef} />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
