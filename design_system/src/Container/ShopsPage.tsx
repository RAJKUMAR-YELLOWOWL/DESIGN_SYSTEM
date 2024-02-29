

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShopsPageComponent from '../Components/ShopsPage';
import { shopsPageMockData } from '../MockData/ShopsPage';

const ShopsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/InventoryPage');
  };
  const handleAddShopsClick = () => {
    navigate('/AddShops');
  };

  const handleAddInventoriesClick = () => {
    navigate('/AddInventories');
  };

  const handleAddProductsClick = () => {
    navigate('/AddProducts');
  };

  const modifiedShopsPageMockData = {
    ...shopsPageMockData,
    shopName: {
      ...shopsPageMockData.shopName,
      options: shopsPageMockData.shopName.options.map((option) => ({
        id: option.id.toString(),
        label: option.label,
      })),
    },
    shopsList: shopsPageMockData.shopsList.map((shop) => ({
      ...shop,
      options: shop.options.map((option) => ({
        id: option.id.toString(), 
        label: option.label,
      })),
    })),
  };

  return (
    <ShopsPageComponent
      {...modifiedShopsPageMockData}
      handleSubmit={handleSubmit}
      handleAddShopsClick={handleAddShopsClick}
      handleAddInventoriesClick={handleAddInventoriesClick}
      handleAddProductsClick={handleAddProductsClick}
    />
  );
};

export default ShopsPage;
