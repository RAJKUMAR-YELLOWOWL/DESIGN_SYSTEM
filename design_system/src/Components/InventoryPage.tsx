import React from 'react';
import Box from '@mui/material/Box';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, Button } from '@mui/material';
import backgroundImage from './background.avif';
import { Messages } from './Contents';

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

const formPage : SxProps<Theme> = {
  height:'50px',
  width:'650px',
}

const selectForm : SxProps<Theme> = {
  height:'50px',
  width:'650px',
}

type InventoryPageProps = {
  hasError: Boolean;
  isLoading: Boolean;
  inventoryName: dropDown;
  shopsList: dropDown;
  inventoryNameChange?: string;
  handleInventoryNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInventory: (inventory: dropDown) => void;
  onSubmitClick: () => void;
  handleSubmit: () => void;
};

type dropDown = {
  options: option[];
};

type option = {
  id: string;
  label: string;
};

const InventoryPageComponent: React.FC<InventoryPageProps> = ({ handleSubmit , inventoryName, inventoryNameChange, handleInventoryNameChange}) => {
  return (
    <Box sx={wholeContainer}>
      <Box sx={body}>
        <FormControl sx={formPage}>
          <InputLabel id="searchInventory">{Messages.SEARCH_INVENTORY}</InputLabel>
          <Select 
          labelId='searchInventory' 
          id='search' 
          value={inventoryNameChange}
          onChange={() => handleInventoryNameChange}
          label={Messages.SEARCH_INVENTORY} 
          sx={selectForm}>
            {inventoryName.options.map((option)=>(
              <MenuItem key = {option.id}>
                 <span>
                     {option.label}
                </span> 
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={searchButton}>
        <Button onClick={handleSubmit} variant="contained">
          {Messages.SUBMIT}
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryPageComponent;
