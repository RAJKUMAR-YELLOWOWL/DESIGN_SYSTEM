import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Components/ShopsPage';
import AddShops from './Components/AddShops';
import AddInventories from './Components/AddInventories';
import AddProducts from './Components/AddProducts';


const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<ShopsPage/>}></Route>
        <Route path = "/AddShops" element = {<AddShops/>}></Route>
        <Route path = "/AddInventories" element = {<AddInventories/>}></Route>
        <Route path = "/AddProducts" element = {<AddProducts/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
