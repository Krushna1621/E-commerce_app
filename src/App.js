import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CartProvider from './store/CartProvider'
import { Route, Routes } from 'react-router-dom';
import Store from './pages/Store'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import EachProduct from './pages/EachProduct'

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/products/:productId' element={<EachProduct />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
