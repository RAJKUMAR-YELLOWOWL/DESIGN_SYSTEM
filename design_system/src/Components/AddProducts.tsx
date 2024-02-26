import { Button, SxProps, Theme, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function AddProducts() {

    const navigation = useNavigate();
    const[showAlert,setShowAlert] = useState(false)

    const handleAlert = () =>{
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        },2000)
    }

    const wholeConProducts: SxProps<Theme> = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minWidth: '800px',
    }

    const headerProducts: SxProps<Theme> = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 'x-large',
        marginLeft:'-90px'
    }

    const container: SxProps<Theme> = {
        display: 'flex',
        width: '800px',
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        marginTop:-20,
    }

    const bodyProducts: SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'row',
    }

    const body1: SxProps<Theme> = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontFamily:'timesnewroman',
        fontSize:'25px',
    }

    const body2: SxProps<Theme> = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    }

    const inputStyle = {
        minWidth: '300px',
        minHeight: '27px', 
    }

    const inputStyleShopsInven = {
        minWidth: '310px',
        minHeight: '27px' 
    }

    const productDetails: SxProps<Theme> = {
        marginTop:'20px',
        marginLeft:'20px',
        fontFamily:'TimesNewRoman',
        display:'flex',
        flexDirection:'column',
        maxWidth:'700px',
        backgroundColor:'lightgreen',
        border:'1px',
        borderRadius:'5px'
    }

    const ProductDetailsPart : SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'row',
    }

    const productDetails1: SxProps<Theme> = {
        display:'flex',
        flex: 1,
        alignItems:'center',
        fontSize: '25px'
    }

    const productDetails2: SxProps<Theme> = {
        display:'flex',
        flex:1,
        alignItems:'center',
        maxWidth:'315px'
    }

    const submitButton : SxProps<Theme> = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'10vh'
    }

    const alertStyle : SxProps<Theme> = {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '90%',
        width: '300px',
      }

    return (
        <Box sx={wholeConProducts}>
            <Box sx={headerProducts}>
                <h2>HERE YOU CAN ADD THE PRODUCT</h2>
            </Box>
            <Box sx={container}>
                <Box sx={bodyProducts}>
                    <Box sx={body1}><label>ENTER THE SHOP NAME      : </label></Box>
                    <Box sx={body2}><input style = {inputStyleShopsInven} placeholder="SHOP NAME" type='text'></input></Box><br />
                </Box>
                <Box sx={bodyProducts}>
                    <Box sx={body1}><label>ENTER THE INVENTORY NAME  : </label></Box>
                    <Box sx={body2}><input style = {inputStyleShopsInven} placeholder="INVENTORY NAME" type='text'></input></Box><br /><br /><br /><br />
                </Box>
                <Box sx={bodyProducts}>
                    <Box sx={body1}>ENTER THE PRODUCT DETAILS </Box>
                </Box>
                    <Box sx = {productDetails}>
                        <Box sx = {ProductDetailsPart}>
                            <Box sx={productDetails1}><label>ENTER THE NAME :</label></Box>
                            <Box sx={productDetails2}><input style={inputStyle} placeholder="COUNTRY" type='text'></input></Box><br /><br />
                        </Box >
                        <Box sx = {ProductDetailsPart}>
                            <Box sx={productDetails1}><label>ENTER THE QUANTITY :</label></Box>
                            <Box sx={productDetails2}><input style={inputStyle} placeholder="STATE" type='text'></input></Box><br /><br />
                        </Box>
                        <Box sx = {ProductDetailsPart}>
                            <Box sx={productDetails1}><label>ENTER THE PRICE:</label></Box>
                            <Box sx={productDetails2}><input style={inputStyle} placeholder="CITY" type='text'></input></Box><br /><br />
                        </Box>
                    </Box>
                <Box sx = {submitButton}><Button onClick={handleAlert} variant="contained">ADD PRODUCT</Button></Box>
                {showAlert && 
                <Box>
                   <Alert sx = {alertStyle}>
                        PRODUCTS ADDED SUCCESSFULLY
                   </Alert>
                </Box>
                }
            </Box>
        </Box>
    )
}
export default AddProducts