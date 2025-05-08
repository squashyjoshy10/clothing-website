// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Customizer from "./pages/Customizer";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/customizer" element={<Customizer />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
