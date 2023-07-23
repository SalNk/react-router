import Home from "./Pages/Home";
import List from "./products/Product";
import Panier from "./products/Panier";
import Caisse from "./products/Caisse";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/*" element={<List />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/caisse" element={<Caisse />} />
      </Routes>
    </>
  );
}

export default App;
