import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useRef, useState, useEffect } from "react";
import Home from "./routes/Home";
import Header from "./components/Header";
import AnimalDetail from "./routes/AnimalDetail";
import Story from "./routes/Story";
import './styles/reset.css';

function App() {
  const homeRef = useRef(null);
  const [scrollSection, setScrollSection] = useState(null);

  const scrollToSection = (section) => {
    setScrollSection(section); // 스크롤할 섹션 저장
  };

  useEffect(() => {
    if (scrollSection && homeRef.current) {
      homeRef.current.scrollToSection(scrollSection); // 섹션으로 스크롤
      setScrollSection(null); // 스크롤 후 초기화
    }
  }, [scrollSection]);

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
