import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Header } from './components/Header';
import { useEffect, useState} from 'react';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Shop } from './pages/Shop';
import { Footer } from './components/Footer';
import { Favorites } from './pages/Favorites';
import { AuthProvider } from './contexts/AuthContext/AuthProvider';
import { ProductsProvider } from './contexts/ProductsContext/useProducts';
import { Cart } from './pages/Cart';
import { RequireAuth } from './contexts/AuthContext/RequireAuth';
import { CartProvider } from './contexts/CartContext/useCart';
import { PaymentPage } from './pages/PaymentPage';
const loadingImage = require('./assets/images/loading.gif');

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      { loading ? 
        <div className='loading-box'><img className='loading' src={loadingImage} alt="loading" /></div> 
        :
        
          <BrowserRouter>
                <AuthProvider>
                    <ProductsProvider>
                      <CartProvider>
                        <Header />
                          <Routes>
                            <Route element={
                              <Home/> } path="/"/>
                            <Route element={<Login />} path="/login" />
                            <Route element={<SignUp />} path="/signup"/>
                            <Route element={<About />} path="/sobre" />
                            <Route element={<Favorites />} path="/favorites" />
                            <Route element={<Contact />} path="/contato" />
                            <Route element={<Shop />} path="/loja" />
                            <Route element={<RequireAuth><PaymentPage /></RequireAuth>} path="/cart/paymentpage" />
                            <Route element={<RequireAuth><Cart/></RequireAuth>} path="/cart" />
                          </Routes>
                          <Footer />
                        </CartProvider>
                      </ProductsProvider>
                  </AuthProvider>
          </BrowserRouter>
      }
    </>
  );
}

export default App;
