import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { shopsPageMockData } from '../MockData/ShopsPage';

const ShopsPage =()=> {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/InventoryPage')
  }
  const handleAddShopsClick = () => {
    navigate('/AddShops');
  };

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
    />
  )
}

export default ShopsPage