import React from 'react';
import { Button, SxProps, Theme, TextField, Box } from "@mui/material";
import backgroundImage from './background.avif';
import Alert from '@mui/material/Alert';
import { Messages } from "./Contents";
import CircularProgress from '@mui/material/CircularProgress';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const wholeConInventories: SxProps<Theme> = {
    minHeight: '98vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '800px',
}

const headerInventories: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: 'x-large',
    flex:1,
}

const container: SxProps<Theme> = {
    display: 'flex',
    width: '800px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'start',
    flex: 1,
    marginTop: -20,
    maxHeight:'600px',
}

const container1:SxProps<Theme> = {
}
const container2: SxProps<Theme> = {
    justifyContent:'start',
    maxHeight:"300px",
    overflowY: 'auto',
}

const body2: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
}

const inputStyle = {
    minWidth: '650px',
    minHeight: '50px',
    marginRight:'5px'
};

const AddButton: SxProps<Theme> = {
    display: 'flex',
    borderRadius: '20px',
    height: '25px',
    justifyContent: 'center',
    marginTop: '20px'
}

const submitButton: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh',
}

const alertStyle: SxProps<Theme> = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
    maxWidth: '90%',
    width: '300px',
}

const InvAddButton : SxProps<Theme> = {
    display:"flex",
    justifyContent:"center",
    marginTop:"5px",
}   

type AddInventoriesProps = {
    shopName: string;
    addInventoryCount: number;
    hasError: boolean;
    isLoading: boolean;
    showAlert: boolean;
    loading: boolean;
    handleNavigation: () => void;
    handleAddInventory: () => void;
    handleMinusInventory: () => void;
    handleShopNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    onSubmitClick: () => void;
}

export const AddInventoriesComponent: React.FC<AddInventoriesProps> = ({
    handleNavigation,
    handleAddInventory,
    handleMinusInventory,
    addInventoryCount,
    showAlert,
    loading,
    handleShopNameChange,   
    shopName,
}) => {

    return (
        <Box sx={wholeConInventories}>
            <Box sx={headerInventories}>
                <h2>{Messages.INVENTORY_PAGE_HEADER}</h2>   
            </Box>
            <Box sx={container}>
                <Box sx = {container1}>
                    <Box sx={body2}><TextField style={inputStyle} value={shopName} onChange={handleShopNameChange} label={Messages.SHOP_NAME}></TextField></Box><br /><br />
                    <Box sx = {container2}>
                        {Array.from({length : addInventoryCount}).map((_, index)=>(
                            <Box key={index}>
                            <Box sx={body2}><TextField style={inputStyle} label={Messages.INVENTORY_NAME}></TextField></Box>
                            </Box>
                        ))}
                        <Box sx = {InvAddButton}><button onClick={handleAddInventory}><AddCircleIcon /></button> 
                        <button onClick={handleMinusInventory}><RemoveCircleOutlineIcon /></button></Box>    
                    </Box>
                    {!loading ? <Box sx={submitButton}><Button onClick={handleNavigation} variant="contained">{Messages.INVENTORY_PAGE_HEADER}</Button></Box>: <Box sx={submitButton}><CircularProgress /></Box>} 
                </Box>
            </Box>
            
            {showAlert &&
                <Box sx={alertStyle}>
                    <Alert>
                        {Messages.INVENTORY_ADDED_ALERT}
                    </Alert>
                </Box>}
        </Box>
    )
}
