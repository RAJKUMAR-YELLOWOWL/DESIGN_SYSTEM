

import React from 'react';
import Box from '@mui/material/Box';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, Button } from '@mui/material';
import backgroundImage from './background.avif';
import { inventoryPageMockData } from '../MockData/InventoryPage';

const wholeContainer: SxProps<Theme> = {
  overflow: 'auto',
  minWidth: '800px',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
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
  marginTop: '300px',
};

type InventoryPageProps = {
  handleSubmit: () => void;
  hasError: Boolean;
  isLoading: Boolean;
  inventoryName: dropDown[];
  shopsList: dropDown[];
  onChangeInventory: (inventory: dropDown[]) => void;
  onSubmitClick: () => void;
};

type dropDown = {
  options: option[];
  selectedValue: string;
};

type option = {
  id: string;
  label: string;
};

const InventoryPageComponent: React.FC<InventoryPageProps> = ({ handleSubmit }) => {
  return (
    <Box sx={wholeContainer}>
      <Box sx={body}>
        <FormControl sx={{ width: 500 }}>
          <InputLabel id="searchInventory">SEARCH INVENTORY</InputLabel>
          <Select labelId='searchInventory' id='search' label="SEARCH INVENTORY" sx={{ width: '100%' }}>
            {inventoryPageMockData.inventoryName.map((inventory) => (
              <MenuItem key={inventory.selectedValue} value={inventory.selectedValue}>
                <span>{inventory.options[0].label}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={searchButton}>
        <Button onClick={handleSubmit} variant="contained">
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryPageComponent;
