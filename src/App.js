import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";
import Header from "./components/Header";
import AnimalDetail from "./routes/AnimalDetail";
import './styles/reset.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        < Header/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/animal/:id" element={<AnimalDetail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
