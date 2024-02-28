import React from 'react'
import AddShopsComponents from '../Components/AddShops'
import { shopsPageMockData } from '../MockData/ShopsPage'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddShops =()=> {

  const navigation = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleNavigation = () => {
      setShowAlert(true);
      setTimeout(() => {
          setShowAlert(false);
          navigation('/AddInventories');
      }, 2000);
  }

  return (
    <AddShopsComponents
    {...shopsPageMockData}
    showAlert = {showAlert}
    handleNavigation = {handleNavigation}
    />
  )
}

export default AddShops