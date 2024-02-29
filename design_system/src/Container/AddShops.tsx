import React from 'react'
import AddShopsComponents from '../Components/AddShops'
import { shopsPageMockData } from '../MockData/ShopsPage'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddShops =()=> {

  const navigation = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [shopNameChange, setShopNameChange] = useState('')
  const [shopStateChange, setShopStateChange] = useState('')
  const [shopCityChange, setShopCityChange] = useState('')
  const [shopCountryChange, setShopCountryChange] = useState('')


  const handleNavigation = () => {
      setShowAlert(true);
      setTimeout(() => {
          setShowAlert(false);
          navigation('/AddInventories');
      }, 2000);
  }

  const handleShopNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setShopNameChange(event.target.value)
  }
  const handleShopStateChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setShopStateChange(event.target.value)
  }
  const handleShopCityChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setShopCityChange(event.target.value)
  }
  const handleShopCountryChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setShopCountryChange(event.target.value)
  }

  



  return (
    <AddShopsComponents
    {...shopsPageMockData}
    showAlert = {showAlert}
    handleShopNameChange={handleShopNameChange}
    handleNavigation = {handleNavigation}
    shopNameChange = {shopNameChange}
    handleShopStateChange={handleShopStateChange}
    handleShopCountryChange={handleShopCountryChange}
    handleShopCityChange={handleShopCityChange}
    shopStateChange = {shopStateChange}
    shopCityChange = {shopCityChange}
    shopCountryChange = {shopCountryChange}
    />
  )
}

export default AddShops