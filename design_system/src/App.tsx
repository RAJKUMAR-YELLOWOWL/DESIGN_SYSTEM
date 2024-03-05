import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Container/ShopsPage';
import AddShops from './Container/AddShops';
import AddInventories from './Container/AddInventories';
import AddProducts from './Container/AddProducts';
import InventoryPage from './Container/InventoryPage';
import ProductsPage from './Container/ProductsPage';
import {BillingSystemContext} from './Context/BillingSystemContext'
import { AxiosInstance } from 'axios';
import  Axios from 'axios';

const App = () => {

  const AxiosInstance = Axios.create({baseURL : process.env.API_BASE_URL})

  return (
    <BillingSystemContext.Provider value={AxiosInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<ShopsPage />} />
          <Route path="/AddShops" element={<AddShops />} />
          <Route path="/AddInventories" element={<AddInventories />} />
          <Route path="/AddProducts" element={<AddProducts />} />
          <Route path="/InventoryPage" element={<InventoryPage />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
        </Routes>4
      </Router>
    </BillingSystemContext.Provider>
  );
}

export default App;

