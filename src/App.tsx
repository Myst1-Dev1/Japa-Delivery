import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Header } from './components/Header';
import { useEffect, useState} from 'react';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Shop } from './pages/Shop';
import { Footer } from './components/Footer';

const loadingImage = require('./assets/images/loading.gif');

function App() {
  const [loading, setLoading] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  function handleOpenCart() {
    setOpenCart(true);
}
  function handleCloseCart() {
      setOpenCart(false);
}


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <CartProvider>
      { loading ? <div className='loading-box'><img className='loading' src={loadingImage} alt="loading" /></div> 
        :
        <BrowserRouter>
              <Header 
                onOpenCart = {openCart} 
                onHandleOpenCart = {handleOpenCart} 
                onHandleCloseCart = {handleCloseCart}
              />
                <Routes>
                  <Route element={<Home onHandleOpenCart = {handleOpenCart} />} path="/"/>
                  <Route element={<Login />} path="/login" />
                  <Route element={<SignUp />} path="/signup"/>
                  <Route element={<About />} path="/sobre" />
                  <Route element={<Contact />} path="/contato" />
                  <Route element={<Shop onHandleOpenCart = {handleOpenCart} />} path="/loja" />
                </Routes>
                <Footer />
        </BrowserRouter>
      }
    </CartProvider>
  );
}

export default App;
