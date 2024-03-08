import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AddInventoriesComponent } from '../Components/AddInventories';
import { inventoryPageMockData } from '../MockData/InventoryPage';

const AddInventories = () => {


  const [showAlert, setShowAlert] = useState(false);
  const [addInventoryCount, setAddInventoryCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [shopName, setShopName] = useState('');

  const handleAddInventory = () => {
    setAddInventoryCount(prevCount => prevCount + 1)
  }

  const handleMinusInventory = () => {
    setAddInventoryCount(prevCount => prevCount - 1)
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

  const handleShopNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setShopName(event.target.value);
  }

  return (
    <AddInventoriesComponent
      {...inventoryPageMockData}
      handleNavigation={handleNavigation}
      handleAddInventory={handleAddInventory}
      loading={loading}
      showAlert={showAlert}
      shopName = {shopName}
      handleShopNameChange = {handleShopNameChange}
      addInventoryCount = {addInventoryCount}
      handleMinusInventory={handleMinusInventory}
    />
  )
}

export default AddInventories