import logo from './logo.svg';
import './App.css';
import Navbar from './Modeles/User/Component/Navbar/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Shop from './Modeles/User/Pages/Shop';
import ShopCategory from './Modeles/User/Pages/ShopCategory';
import Product from './Modeles/User/Pages/Product';
import Cart from './Modeles/User/Pages/Cart';
import LoginSignup from './Modeles/User/Pages/LoginSignup';
import Footer from './Modeles/User/Component/Footer/Footer';
import men_banner from './Modeles/User/Component/Assets/banner_mens.png'
import women_banner from './Modeles/User/Component/Assets/banner_women.png'
import kid_banner from './Modeles/User/Component/Assets/banner_kids.png'
import ShopContextProvider from './Modeles/User/Context/ShopContext';

function App() {
  return (
    <div >
      <ShopContextProvider>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Shop/>} />
      <Route exact path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>} />
      <Route exact path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>} />
      <Route exact path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>} />
      <Route exact path='/product' element={<Product/>} />
      <Route exact path=':productId' element={<Product/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/login' element={<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ShopContextProvider>
    </div>
  );
}

export default App;
