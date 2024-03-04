import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { shopsPageMockData } from '../MockData/ShopsPage';
import { useState } from 'react';
import  Axios  from 'axios';
import { API_BASE_URL } from './ip';



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


  console.log(shopNameChange)

  const fetchingShops = () =>{
    Axios.get('${BASE_URL_API}/allShops').then(
      response => {
        console.log("Data : ", response.data);
      }
    ) 
    .catch(error =>{
      console.error("Error : ",error);
    })
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

