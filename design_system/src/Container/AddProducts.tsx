import React from 'react'
import { productsPageMockData } from '../MockData/ProductsPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductsComponents from '../Components/AddProducts';

const AddProducts=()=> {


    const navigation = useNavigate();
    const [showAlert, setShowAlert] = useState(false)

    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

  return (
    <AddProductsComponents
    {...productsPageMockData}
    handleAlert = {handleAlert}
    showAlert = {showAlert}
    />
  )
}

export default AddProducts