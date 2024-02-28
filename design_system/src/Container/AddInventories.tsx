import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AddInventoriesComponent } from '../Components/AddInventories';
import { inventoryPageMockData } from '../MockData/InventoryPage';

const AddInventories = () => {


  const [showAlert, setShowAlert] = useState(false);
  const [addInventoryCount, setAddInventoryCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleAddInventory = () => {
    setAddInventoryCount(prevCount => prevCount + 1)
  }

  const navigation = useNavigate();
  const handleNavigation = () => {
    setShowAlert(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    setTimeout(() => {
      setShowAlert(false);
      navigation('/AddProducts');
    }, 2000);
  }

  

  return (
    <AddInventoriesComponent
      {...inventoryPageMockData}
      handleNavigation={handleNavigation}
      handleAddInventory={handleAddInventory}
      loading={loading}
      showAlert={showAlert}
      addInventoryCount = {addInventoryCount}
    />
  )
}

export default AddInventories