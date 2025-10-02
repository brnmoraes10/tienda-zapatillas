import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Galery from './pages/galery/Galery';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Productos from './pages/productos/Productos';
import ProductDetail from './pages/productDetail/ProductDetail';
import ProductCreate from './pages/productCreate/ProductCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/nuevo" element={<ProductCreate />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
