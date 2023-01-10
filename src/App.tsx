import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { About } from './pages/About';

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
      { loading ? <div className='loading-box'><img className='loading' src={loadingImage} alt="loading" /></div> 
      :
      <div>
          <Header />
          <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup"/>
            <Route element={<About />} path="/sobre" />
          </Routes>
          </BrowserRouter>
      </div>
      }
    </>
  );
}

export default App;
