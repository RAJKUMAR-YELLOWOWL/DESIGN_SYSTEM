import { SxProps, Theme, Typography, Box, Button, TextField } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import backgroundImage from './background.avif';
import Alert from '@mui/material/Alert';
import { Messages } from "./Contents";

const wholeConShops: SxProps<Theme> = {
    minHeight: '98vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '800px',
}

const headerShops: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: 'x-large',
}

const container: SxProps<Theme> = {
    display: 'flex',
    width: '700px',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -20,
}

const bodyShops: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    
}

const body2: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
}

const inputStyleShops = {
    minWidth: '650px',
    minHeight: '50px',
};


const submitButton: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh'
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

type AddShopsProps = {
    showAlert: boolean;
    hasError: boolean;
    isLoading: boolean;
    shopCountryChange?: string;
    shopStateChange?: string;
    shopCityChange?: string;
    shopNameChange?: string;
    handleShopNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleShopCountryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleShopCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleShopStateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitClick: () => void;
    handleNavigation: () => void;  
    AddingShops: () => void;    
}

const AddShopsComponents:React.FC<AddShopsProps> = ({isLoading, 
    AddingShops,
    handleNavigation,
    shopCountryChange, 
    shopStateChange,
    shopCityChange, 
    showAlert, 
    handleShopNameChange, 
    handleShopCountryChange, 
    handleShopStateChange,
    handleShopCityChange, 
    shopNameChange
}) => {

    return (
        <Box sx={wholeConShops}>
            <Box sx={headerShops}>
                <h2>{Messages.SHOPS_PAGE_HEADER}</h2>
            </Box>
            <Box sx={container}>
                <Box sx={body2}><TextField style={inputStyleShops} label={Messages.SHOP_NAME} value={shopNameChange} onChange = {handleShopNameChange} /></Box><br /><br />
                <Box sx={body2}><TextField style={inputStyleShops} label={Messages.COUNTRY} value={shopCountryChange} onChange = {handleShopCountryChange} /></Box><br /><br />
                <Box sx={body2}><TextField style={inputStyleShops} label={Messages.STATE} value={shopStateChange} onChange = {handleShopStateChange} /></Box><br /><br />
                <Box sx={body2}><TextField style={inputStyleShops} label={Messages.CITY} value={shopCityChange} onChange = {handleShopCityChange} /></Box><br /><br />
                {!isLoading ? <Box sx={submitButton}><Button onClick={AddingShops} variant="contained">{Messages.SHOPS_PAGE_HEADER}</Button></Box> : isLoading && <Box sx={submitButton}><CircularProgress /></Box>}                
                {showAlert &&
                <Box sx={alertStyle}>
                    <Alert>
                        {Messages.SHOP_ADDED_SUCCESSFULLY}
                    </Alert>
                </Box>}
            </Box>
                
        </Box>
    )
}
export default AddShopsComponents;

