import "./globals.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<div>HOME</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/countries/:id" element={<div>DETALLE</div>} />
        <Route path="/create" element={<div>CREAR</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;