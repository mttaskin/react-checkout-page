import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import UpdateProduct from "./pages/UpdateProduct";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/NewProduct" element={<NewProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
