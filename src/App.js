import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from './pages/register/components';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductList from './pages/home/productlist';
import ProductDetail from './pages/productdetail';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/product' element={<ProductList/>}/>
          <Route path='/product/:productName/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
