import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import './styles/reset.css';

function App() {
  return (
    <Router>
      < Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
