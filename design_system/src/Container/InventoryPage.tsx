import React from 'react'
import { useNavigate } from 'react-router-dom';
import InventoryPageComponent from '../Components/InventoryPage';
import { inventoryPageMockData } from '../MockData/InventoryPage';


const InventoryPage =()=> {

  const navigate = useNavigate();
  const handleSubmit = () =>{
           navigate('/ProductsPage')
  }
  
  return (
    <InventoryPageComponent
     {...inventoryPageMockData}
     handleSubmit = {handleSubmit}
    />
  )
}

export default InventoryPage