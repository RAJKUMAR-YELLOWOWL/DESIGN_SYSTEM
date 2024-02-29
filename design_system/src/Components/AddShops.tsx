import { Button, SxProps, Theme, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { Messages } from "./Context";
import CheckIcon from '@mui/icons-material/Check';

const wholeConShops: SxProps<Theme> = {
    minHeight: '100vh',
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
    marginLeft: '-90px'
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

const body1: SxProps<Theme> = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    fontFamily: 'timesnewroman',
    fontSize: '25px',
}

const body2: SxProps<Theme> = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
}

const inputStyle = {
    minWidth: '300px',
    minHeight: '27px'
};

const inputStyleShops = {
    minWidth: '310px',
    minHeight: '27px'
};

const shopDetails: SxProps<Theme> = {
    marginTop: '13px',
    marginLeft: '20px',
    fontFamily: 'TimesNewRoman',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '650px',
    backgroundColor: 'lightgreen',
    border: '1px',
    borderRadius: '5px'
}

const shopDetailsPart: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
}

const shopDetails1: SxProps<Theme> = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    fontSize: '25px',
}

const shopDetails2: SxProps<Theme> = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    maxWidth: '315px'
}

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
    handleNavigation:()=>void;
    showAlert:Boolean;
    hasError : Boolean;
    isLoading : Boolean;
    onSubmitClick : () => void;
}

const AddShopsComponents:React.FC<AddShopsProps> = ({handleNavigation, showAlert}) => {

    const[showDetails,setShowDetails] = useState(false)

    return (
        <Box sx={wholeConShops}>
            <Box sx={headerShops}>
                <h2>{Messages.SHOPS_PAGE_HEADER}</h2>
            </Box>
            <Box sx={container}>
                <Box sx={bodyShops}>
                    <Box sx={body1}><label>ENTER THE SHOP NAME      : </label></Box>
                    <Box sx={body2}><input style={inputStyleShops} placeholder="SHOP NAME" type='text'></input></Box><br /><br /><br /><br />
                </Box>
                <Box sx={bodyShops}>
                    <Box sx={body1} onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>ENTER THE SHOPLOCATION </Box>
                </Box>
                {showDetails &&
                <>
                <Box sx={shopDetails}>
                    <Box sx={shopDetailsPart}>
                        <Box sx={shopDetails1}><label>ENTER THE COUNTRY :</label></Box>
                        <Box sx={shopDetails2}><input style={inputStyle} placeholder="COUNTRY" type='text'></input></Box><br /><br />
                    </Box >
                    <Box sx={shopDetailsPart}>
                        <Box sx={shopDetails1}><label>ENTER THE STATE :</label></Box>
                        <Box sx={shopDetails2}><input style={inputStyle} placeholder="STATE" type='text'></input></Box><br /><br />
                    </Box>
                    <Box sx={shopDetailsPart}>
                        <Box sx={shopDetails1}><label>ENTER THE CITY :</label></Box>
                        <Box sx={shopDetails2}><input style={inputStyle} placeholder="CITY" type='text'></input></Box><br /><br />
                    </Box>
                </Box></>}
                <Box sx={submitButton}><Button onClick={handleNavigation} variant="contained">ADD SHOPS</Button></Box>
                {showAlert &&
                    <Box sx={alertStyle}>
                        <Alert>
                            SHOP ADDED SUCCESSFULLY
                        </Alert>
                    </Box>}
            </Box>
                
        </Box>
    )
}
export default AddShopsComponents;

