import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tshirts } from "./pages/Tshirts";
import { Pants } from "./pages/Pants";
import { Accessories } from "./pages/Accessories";
import { Jackets } from "./pages/Jackets";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#fffdf7" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/pants" element={<Jackets />} />
          <Route path="/sneakers" element={<Pants />} />
          <Route path="/sneakers" element={<Accessories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
