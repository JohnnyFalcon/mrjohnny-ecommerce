import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tshirts } from "./pages/Tshirts";
import { Pants } from "./pages/Pants";
import { Sneakers } from "./pages/Sneakers";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirts" element={<Tshirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </main>
  );
}

export default App;
