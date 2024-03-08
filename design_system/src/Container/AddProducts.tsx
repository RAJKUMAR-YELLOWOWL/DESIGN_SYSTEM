import React from 'react'
import { productsPageMockData } from '../MockData/ProductsPage';
import { useState } from 'react';
import AddProductsComponents from '../Components/AddProducts';

const AddProducts=()=> {

    const [showAlert, setShowAlert] = useState(false)
    const [ProductNameChange, setProductNameChange] = useState('')
    const [ProductQuantityChange, setProductQuantityChange] = useState('')
    const [ProductPriceChange, setProductPriceChange] = useState('')
    const [ShopNameChange, setShopNameChange] = useState('')
    const [InventoryNameChange, setInventoryNameChange] = useState('')


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
    const handleShopNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setShopNameChange(event.target.value)
    }
    const handleInventoryNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setInventoryNameChange(event.target.value)
    }
  

  return (
    <AddProductsComponents
    {...productsPageMockData}
    handleAlert = {handleAlert}
    showAlert = {showAlert}
    ProductNameChange = {ProductNameChange}
    ProductQuantityChange = {ProductQuantityChange}
    ProductPriceChange = {ProductPriceChange}
    ShopNameChange = {ShopNameChange}
    InventoryNameChange = {InventoryNameChange}
    handleProductNameChange = {handleProductNameChange}
    handleProductQuantityChange = {handleProductQuantityChange}
    handleProductPriceChange = {handleProductPriceChange}
    handleShopNameChange = {handleShopNameChange}
    handleInventoryNameChange = {handleProductNameChange}
    />
  )
}

export default AddProducts