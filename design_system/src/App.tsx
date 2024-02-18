import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ShopsPage from './Components/ShopsPage';

const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<ShopsPage/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
