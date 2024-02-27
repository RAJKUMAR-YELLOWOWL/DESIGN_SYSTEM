import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Components/ShopsPage';
import AddShops from './Components/AddShops';
import AddInventories from './Components/AddInventories';
import AddProducts from './Components/AddProducts';
import InventoryPage from './Components/InventoryPage';
import ProductsPage from './Components/ProductsPage';
import Error from './Components/Error';

const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<ShopsPage/>}></Route>
        <Route path = "/AddShops" element = {<AddShops/>}></Route>
        <Route path = "/AddInventories" element = {<AddInventories/>}></Route>
        <Route path = "/AddProducts" element = {<AddProducts/>}></Route>
        <Route path="/InventoryPage" element = {<InventoryPage/>}></Route>
        <Route path="/ProductsPage" element={<ProductsPage/>}></Route>
        <Route path="/Error" element={<Error/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
