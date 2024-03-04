import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Container/ShopsPage';
import AddShops from './Container/AddShops';
import AddInventories from './Container/AddInventories';
import AddProducts from './Container/AddProducts';
import InventoryPage from './Container/InventoryPage';
import ProductsPage from './Container/ProductsPage';

const App = () => {

  const apiUrl = process.env.API_BASE_URL

  return (
    <Router>
      <Routes>
        {/* <apiUrl.provider value = {apiUrl}> */}
          <Route path="/" element={<ShopsPage />}></Route>
          <Route path="/AddShops" element={<AddShops />}></Route>
          <Route path="/AddInventories" element={<AddInventories />}></Route>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
          <Route path="/InventoryPage" element={<InventoryPage />}></Route>
          <Route path="/ProductsPage" element={<ProductsPage />}></Route>
        {/* </apiUrl.provider> */}
      </Routes>
    </Router>

  );
}

export default App;
