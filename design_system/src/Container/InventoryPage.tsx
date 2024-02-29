// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import InventoryPageComponent from '../Components/InventoryPage';
// import { inventoryPageMockData } from '../MockData/InventoryPage';


// const InventoryPage =()=> {

//   const navigate = useNavigate();
//   const handleSubmit = () =>{
//            navigate('/ProductsPage')
//   }
  
//   return (
//     <InventoryPageComponent
//      {...inventoryPageMockData}
//      handleSubmit = {handleSubmit}
//     />
//   )
// }

// export default InventoryPage
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryPageComponent from '../Components/InventoryPage';
import { inventoryPageMockData } from '../MockData/InventoryPage';
import { dropDown } from '../Types/InventoryPage'; 
const InventoryPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/ProductsPage');
  };

  const inventoryName: dropDown[] = inventoryPageMockData.inventoryName.map(item => ({
    options: item.options.map(option => ({
      id: String(option.id), 
      label: option.label
    })),
    selectedValue: item.selectedValue
  }));

  return (
    <InventoryPageComponent
      {...inventoryPageMockData}
      inventoryName={inventoryName}
      handleSubmit={handleSubmit}
    />
  );
};

export default InventoryPage;
