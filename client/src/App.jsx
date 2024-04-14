import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>LANDING</div>} />
        <Route path="/home" element={<div>HOME</div>} />
        <Route path="/about" element={<div>ABOUUT</div>} />
        <Route path="/countries/:id" element={<div>DETALLE</div>} />
        <Route path="/create" element={<div>CREAR</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;