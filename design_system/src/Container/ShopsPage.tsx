import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { useState } from 'react';
import  Axios  from 'axios';
import { BillingSystemContext } from '../Context/BillingSystemContext';
import { useContext } from 'react';


const ShopsPage = () => {

  const [shopNameChange, setShopNameChange] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false)
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/InventoryPage')
  }
  const handleAddShopsClick = () => {
    navigate('/AddShops');
  };

  const handleShopNameChange = (event: any) => {        
    setShopNameChange(event.target.value)
  }

  const handleAddInventoriesClick = () => {
    navigate('/AddInventories');
  };

  const handleAddProductsClick = () => {
    navigate('/AddProducts');
  };

const axiosInstance = useContext(BillingSystemContext)
const fetchingShops = async () =>{
  console.log('hi bro')
  try{
    const response = await axiosInstance?.get('/allShops');
  }
  catch(error)
  {
    console.error("Error : ",error);
  }
}
  
  return (
    <ShopsPageComponent
      handleSubmit={handleSubmit}
      handleAddShopsClick={handleAddShopsClick}
      handleAddInventoriesClick={handleAddInventoriesClick}
      handleAddProductsClick={handleAddProductsClick}
      handleShopNameChange={handleShopNameChange}
      shopNameChange={shopNameChange}
      hasError={hasError}
      isLoading={false}
      shopsList={[]}
      fetchingShops = {fetchingShops} />
  )
}

export default ShopsPage

