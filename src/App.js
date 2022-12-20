import { Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer } from './components';

import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProducts,
  Private,
} from './pages';
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
