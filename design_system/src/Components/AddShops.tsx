import { Button, SxProps, Theme, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';


function AddShops() {

    const wholeConShops: SxProps<Theme> = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
    }

    const headerShops: SxProps<Theme> = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 'x-large',
    }

    const bodyShops: SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'row'
    }

    const body1: SxProps<Theme> = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontFamily:'timesnewroman',
        fontSize:'18px'
    }

    const body2: SxProps<Theme> = {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    }

    const button1: SxProps<Theme> = {
        padding: '5px',
        display: 'flex',
        flexDirectiom: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
    }

    const buttonShops: SxProps<Theme> = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '30px',
        margin: '0 auto',
        marginTop: '1%',
        backgroundColor: 'burlywood',
    }

    const container: SxProps<Theme> = {
        display: 'flex',
        flex: 1,
        width: '500px',
        flexDirection: 'column',
        marginTop:'180px'
    }

    const subButton : SxProps<Theme> = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'10vh'
    }



    return (
        <Box sx={wholeConShops}>
            <Box sx={headerShops}>
                <h2>HERE YOU CAN ADD THE SHOPS</h2>
            </Box>
            <Box sx={container}>
                <Box sx={bodyShops}>
                    <Box sx={body1}><label>ENTER THE SHOP NAME      : </label></Box>
                    <Box sx={body2}><input type='text'></input></Box><br /><br /><br /><br />
                </Box>
                <Box sx={bodyShops}>
                    <Box sx={body1}><label>ENTER THE SHOPLOCATION : </label></Box>
                    <Box sx={body2}><input type='text'></input></Box><br /><br />
                </Box>
                <Box sx = {subButton}><Button variant="contained">ADD SHOPS</Button></Box>
            </Box>
            
        </Box>
    )
}
export default AddShops