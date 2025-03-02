import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Header from './page/Header';
import Background_image from './page/Background_image';
import Category from './page/Category';
import Products from './page/Products';
import Sale from './page/Sale';
import Featured_products from './page/Featured_products';
import Most_popular_products from './page/Most_popular_products';
import AddProduct from './components/AddProducts';
import ProductDetail from './components/ProductDetail';





function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/Settings" element={<Settings />} /> 
        {/* เส้นทางสำหรับหน้า Login และ Register */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/addProfile" element={<AddProfile />} />
        <Route path="/register" element={<Register />} />  */}

        {/* เส้นทางที่มี Sidebar และ Topbar */}
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={
          <div>
            <Header/>
            <Background_image/>
              <Products/>
              <Sale/>
          </div>
        } />
        <Route path="/data" element={
          <div>
            <AddProduct/>

          </div>
        } />
        <Route path="/product/:id" element={
          <div>
            <Header/>
            <Background_image/>
            <ProductDetail/>
            <Products/>
          </div>
        } />



      
      </Routes>
    </Router>
  );
}

export default App;
