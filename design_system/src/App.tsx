import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Components/ShopsPage';
import AddShops from './Components/AddShops';


const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<ShopsPage/>}></Route>
        <Route path = "/AddShops" element = {<AddShops/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
