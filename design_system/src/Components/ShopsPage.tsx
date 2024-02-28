import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { shopsPageMockData } from '../MockData/ShopsPage';
import backgroundImage from './background.avif';


export default function ShopsPage() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/InventoryPage')
  }
  const handleAddShopsClick = () => {
    navigate('/AddShops');
  };

  const handleAddInventoriesClick = () => {
    navigate('/AddInventories');
  };

  const handleAddProductsClick = () => {
    navigate('/AddProducts');
  };

  const wholeContainer: SxProps<Theme> = {
    overflow: 'auto',
    minWidth: '800px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }
  const boxContainer: SxProps<Theme> = {
    height: '40vh',
    maxHeight: '70vh',
    overflowY: 'auto',
  }
  const buttonContainer: SxProps<Theme> = {
    display: 'flex',
    border: '1px',
    borderRadius: '8px',
    padding: '30px',
    marginBottom: '30px',
  }
  const container: SxProps<Theme> = {
    minHeight: '40vh',
    display: 'flex',
    border: '1px',
    marginTop: '10px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const addShopsButton: SxProps<Theme> = {
    '&.addShopsBut.MuiButton-contained': {
      paddingRight: '10px',
      marginRight: '10px',
    }
  };

  const button1: SxProps<Theme> = {
    marginRight: '5px'
  };

  const searchButton: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh',
  };

  const body: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    alignItems: 'center',
    marginTop: '300px'
  }

  const error: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
  }

  const generateMenuItems = () => {
    return shopsPageMockData.shopsList.map((shop) => (
      <MenuItem>
        <span>{shop.options[0].label}</span>
      </MenuItem>
    ))
  }

  return (

    <Box sx={wholeContainer}>
      {!shopsPageMockData.hasError ?
        (<><Box sx={buttonContainer}>
          <Box sx={button1}><Button onClick={handleAddShopsClick} variant="contained"> ADD SHOPS </Button></Box>
          <Box sx={button1}><Button onClick={handleAddInventoriesClick} variant="contained"> ADD INVENTORIES </Button></Box>
          <Box sx={button1}><Button onClick={handleAddProductsClick} variant="contained"> ADD PRODUCTS </Button></Box>
        </Box><Box sx={body}>
            <FormControl sx={{ width: 500 }}>
              <InputLabel id="searchShop">SEARCH SHOP</InputLabel>
              <Select
                labelId='searchShop'
                id='search'
                label="SEARCH SHOP"
                sx={{ width: '100%' }}
              >
                {generateMenuItems()}
              </Select>
            </FormControl>
          </Box>

          {!shopsPageMockData.isLoading && <Box sx={searchButton}><Button onClick={handleSubmit} variant="contained">SUBMIT</Button></Box>}
          {shopsPageMockData.isLoading && <Box sx={searchButton}><Button onClick={handleSubmit} variant="contained">LOADING...</Button></Box>}
        </>) : (<Box sx={error}><label>Error 404 not found</label></Box>)}
    </Box>
  );
}