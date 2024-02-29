import React from 'react'
import { productsPageMockData } from '../MockData/ProductsPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductsComponents from '../Components/AddProducts';

const AddProducts=()=> {


    const navigation = useNavigate();
    const [showAlert, setShowAlert] = useState(false)
    const [ProductNameChange, setProductNameChange] = useState('')
    const [ProductQuantityChange, setProductQuantityChange] = useState('')
    const [ProductPriceChange, setProductPriceChange] = useState('')

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    const handleProductNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setProductNameChange(event.target.value)
    }
    const handleProductQuantityChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setProductQuantityChange(event.target.value)
    }
    const handleProductPriceChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setProductPriceChange(event.target.value)
    }
  

  return (
    <AddProductsComponents
    {...productsPageMockData}
    handleAlert = {handleAlert}
    showAlert = {showAlert}
    ProductNameChange = {ProductNameChange}
    ProductQuantityChange = {ProductQuantityChange}
    ProductPriceChange = {ProductPriceChange}
    handleProductNameChange = {handleProductNameChange}
    handleProductQuantityChange = {handleProductQuantityChange}
    handleProductPriceChange = {handleProductPriceChange}
    />
  )
}

export default AddProducts