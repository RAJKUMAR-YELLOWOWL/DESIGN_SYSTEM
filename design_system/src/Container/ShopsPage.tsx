import React from 'react'
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { useState } from 'react';
import { BillingSystemContext } from '../Context/BillingSystemContext';
import { useContext } from 'react';
import axios, { AxiosInstance } from 'axios';


const ShopsPage = () => {

  const [shopNameChange, setShopNameChange] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false)
  const [shopsData, setShopsData] = useState([])
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


const axiosInstance = useContext(BillingSystemContext) as AxiosInstance
const fetchingShops = async () =>{
  console.log('hi bro')
  try{
    const response = await axios.get('http://192.168.0.105:3001/allShops')
    console.log(response.data.data)
    setShopsData(response.data.data)
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
      fetchingShops = {fetchingShops} 
      shopsData = {shopsData}/>
  )
}

export default ShopsPage

    // await axiosInstance.get('/allShops');
