import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { shopsPageMockData } from '../MockData/ShopsPage';
import backgroundImage from './background.avif';
import { Messages } from './Contents';

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

type ShopsPageProps = {
  hasError: boolean;
  isLoading: boolean;
  shopsList: dropDown;
  shopNameChange?: string;
  handleShopNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleAddShopsClick: () => void;
  handleAddInventoriesClick: () => void;
  handleAddProductsClick: () => void;
}
type dropDown = {
  options: option[];
}

type option = {
  id: string;
  label: string;
}

const ShopsPageComponent: React.FC<ShopsPageProps> = ({ handleSubmit, handleAddShopsClick, handleAddInventoriesClick, handleAddProductsClick, handleShopNameChange, shopNameChange, shopsList, isLoading, hasError }) => {

  return (

    <Box sx={wholeContainer}>
      {!shopsPageMockData.hasError ?
        (<><Box sx={buttonContainer}>
          <Box sx={button1}><Button onClick={handleAddShopsClick} variant="contained"> {Messages.SHOPS_PAGE_HEADER} </Button></Box>
          <Box sx={button1}><Button onClick={handleAddInventoriesClick} variant="contained"> {Messages.INVENTORY_PAGE_HEADER} </Button></Box>
          <Box sx={button1}><Button onClick={handleAddProductsClick} variant="contained"> {Messages.PRODUCT_NAME} </Button></Box>
        </Box><Box sx={body}>
            <FormControl sx={{ width: 500 }}>
              <InputLabel id="searchShop">SEARCH SHOP</InputLabel>
              <Select
                labelId='searchShop'
                id='search'
                value={shopNameChange}
                onChange={() => handleShopNameChange}
                label="SEARCH SHOP"
                sx={{ width: '100%' }}
              >
                {shopsList.options.map((option) => (
                  <MenuItem key={option.id}>
                    <span>{option.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {!isLoading && <Box sx={searchButton}><Button onClick={handleSubmit} variant="contained">{Messages.SUBMIT}</Button></Box>}
          {isLoading && <Box sx={searchButton}><Button onClick={handleSubmit} variant="contained">{Messages.LOADER}</Button></Box>}
        </>) : (<Box sx={error}><label>Error 404 not found</label></Box>)}
    </Box>
  );
}

export default ShopsPageComponent