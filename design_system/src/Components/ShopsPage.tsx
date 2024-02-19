import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './MockData';
import '../Css/ShopsPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';


export default function ShopsPage() {

  const showLoaderForOneSecond = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'block'; 
      setTimeout(() => {
        loader.style.display = 'none'; 
      }, 1000);
    }
  };

  return (
    <div className='wholeContainer'>
      <div className='navigation'>
            <div className='nav1'><Link to = "/AddShops">ADD PRODUCTS</Link></div>
            <div className='nav2'><Link to = "/AddInventories">ADD INVENTORIES</Link></div>
            <div className='nav3'><Link to = "/AddProducts">ADD PRODUCTS</Link></div>
      </div>

        <Box sx={{ display: 'flex', padding: '10px' }}>
          <Select
            id="searchShop"
            label="Search for shop"
            fullWidth
            sx = {{marginRight : '10px'}}
          >
          <MenuItem value = {1}>shop 1</MenuItem>
          <MenuItem value = {2}>shop 2</MenuItem>
          <MenuItem value = {3}>shop 3</MenuItem>
          </Select>

          <Select
            id="searchInventory"
            label="Select for inventory"
            fullWidth
            sx={{ marginRight: '10px' }}
          >
          <MenuItem value = {1}>inventory 1</MenuItem>
          <MenuItem value = {2}>inventory 2</MenuItem>
          <MenuItem value = {3}>inventory 3</MenuItem>  
          </Select>
          <button style={{padding: '10px 20px', borderRadius: '7px'}}>SEARCH</button>
        </Box>

        <div  id="loader" style={{ display: 'none' }}>Loading...</div>

        <div className='boxContainer'>
          <Box sx={{ marginTop: '30px', overflowX: 'auto' }}>
            <DataGrid
              rows={rows}
              columns={[
                { field: 'id', headerName: 'ID', flex: 1 },
                { field: 'shop', headerName: 'Shop', flex: 1 },
                { field: 'inventory', headerName: 'Inventory', flex: 1 },
                { field: 'products', headerName: 'Products', flex: 1 }
              ]}
              checkboxSelection
            />
          </Box>
        </div>

        {/* <div className='container'>
            <button className='button1' onClick={handleAddShopsClick}>ADD SHOPS</button>
            <button className='button2' onClick={handleAddInventoriesClick}>ADD INVENTORY</button>
            <button className='button3' onClick={handleAddProductsClick}>ADD PRODUCTS</button>
        </div> */}

        <div className='responseData'>
          
        </div>

    </div>
  );
}