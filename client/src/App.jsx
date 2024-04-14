import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries/:id" element={<CountryDetail />} />
        <Route path="/create" element={<div>CREAR</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;