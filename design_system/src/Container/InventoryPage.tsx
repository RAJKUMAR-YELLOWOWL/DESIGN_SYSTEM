import React from 'react'
import { useNavigate } from 'react-router-dom';
import InventoryPageComponent from '../Components/InventoryPage';
import { inventoryPageMockData } from '../MockData/InventoryPage';
import { useState } from 'react';


const InventoryPage =()=> {

  const navigate = useNavigate();

  const [inventoryNameChange, setInventoryNameChange] = useState('')

  const handleSubmit = () =>{
           navigate('/ProductsPage')
  }

  const handleInventoryNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setInventoryNameChange(event.target.value)
  }
  
  return (
    <InventoryPageComponent
     {...inventoryPageMockData}
     handleSubmit = {handleSubmit}
     handleInventoryNameChange={handleInventoryNameChange}
     inventoryNameChange = {inventoryNameChange}
    />
  )
}

export default InventoryPage
