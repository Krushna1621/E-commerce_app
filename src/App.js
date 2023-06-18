import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import { Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
