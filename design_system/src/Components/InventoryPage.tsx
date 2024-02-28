import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { inventoryPageMockData } from '../MockData/InventoryPage';
import backgroundImage from './background.avif';

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

type InventoryPageProps = {
  handleSubmit: () => void;
  hasError: Boolean;
  isLoading: Boolean;
  inventoryName: dropDown[];
  shopsList: dropDown[];
  onChangeInventory: (inventory: dropDown[]) => void;
  onSubmitClick: () => void;
}
type dropDown = {
  options: option[];
  selectedValue: string;
}

type option = {
  id: String;
  label: string;
}

const InventoryPageComponent: React.FC<InventoryPageProps> = ({ handleSubmit }) => {

  const generateMenuItems = () => {
    return inventoryPageMockData.inventoryName.map((inventory)=>(
        <MenuItem>
            <span>{inventory.options[0].label}</span>
        </MenuItem>
    ))
  }



  return (
    <Box sx={wholeContainer}>

      <Box sx={body}>
        <FormControl sx={{ width: 500 }}>
          <InputLabel id="searchInventory">SEARCH INVENTORY</InputLabel>
          <Select
            labelId='searchInventory'
            id='search'
            label="SEARCH INVENTORY"
            sx={{ width: '100%' }}
          >
          </Select>
        </FormControl>
      </Box>

      <Box sx={searchButton}><Button onClick={handleSubmit} variant="contained">SUBMIT</Button></Box>

    </Box>
  );
}

export default InventoryPageComponent