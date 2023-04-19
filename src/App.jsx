import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/signin' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/shop' element={ <ProductList/> } />
        <Route path='/product' element={ <Product/> } />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;