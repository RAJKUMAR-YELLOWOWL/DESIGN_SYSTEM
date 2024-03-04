import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { shopsPageMockData } from '../MockData/ShopsPage';
import { useState } from 'react';



const ShopsPage =()=> {

  const [shopNameChange, setShopNameChange] = useState('')
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/InventoryPage')
  }
  const handleAddShopsClick = () => {
    navigate('/AddShops');
  };

  const handleShopNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setShopNameChange(event.target.value)
  }

  const handleAddInventoriesClick = () => {
    navigate('/AddInventories');
  };

  const handleAddProductsClick = () => {
    navigate('/AddProducts');
  };
  

  

  return (
    <ShopsPageComponent
    {...shopsPageMockData}
    handleSubmit = {handleSubmit}
    handleAddShopsClick = {handleAddShopsClick}
    handleAddInventoriesClick = {handleAddInventoriesClick}
    handleAddProductsClick = {handleAddProductsClick}
    handleShopNameChange={handleShopNameChange}
    shopNameChange = {shopNameChange}
    />
  )
}

export default ShopsPage

