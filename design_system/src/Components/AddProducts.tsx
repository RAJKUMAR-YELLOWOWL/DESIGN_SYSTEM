import { Button, SxProps, Theme, Box, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { productsPageMockData } from "../MockData/ProductsPage";
import { Messages } from "./Contents";
import CircularProgress from '@mui/material/CircularProgress';

const wholeConProducts: SxProps<Theme> = {
    minHeight: '98vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundImage})`,
    alignItems: 'center',
    justifyContent:'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minWidth: '800px',
}

const headerProducts: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'START',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: 'x-large',
    marginLeft: '-90px',
}

const container: SxProps<Theme> = {
    display: 'flex',
    flex:1,
    width: '700px',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -20,
}

const bodyProducts: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'black',
}


const body2: SxProps<Theme> = {
    display: 'flex',
    justifyContent:'center',
}

const inputStyle = {
    minWidth: '650px',
    minHeight: '27px',
}

const inputStyleShopsInven = {
    minWidth: '650px',
    minHeight: '50px'
}

const productDetails: SxProps<Theme> = {
    marginTop: '20px',
    marginLeft: '20px',
    fontFamily: 'TimesNewRoman',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    backgroundColor: 'lightgreen',
    border: '1px',
    borderRadius: '5px'
}

const ProductDetailsPart: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
}

const productDetails1: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px'
}

const productDetails2: SxProps<Theme> = {
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

type AddProductsProps = {
    productName : string;
    shopName : string,
    inventoryName:string,
    showAlert: boolean;
    hasError : boolean;
    isLoading : boolean;
    ProductQuantityChange?: string;
    ProductPriceChange?: string;
    ProductNameChange?: string;
    ShopNameChange?: string;
    InventoryNameChange?: string;
    handleProductNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleProductQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleProductPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleShopNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInventoryNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAlert: () => void;
}

const AddProductsComponents: React.FC<AddProductsProps> = ({ isLoading, handleAlert, showAlert,ProductNameChange,ProductQuantityChange,ProductPriceChange,handleProductQuantityChange,handleProductPriceChange,handleProductNameChange, handleShopNameChange, ShopNameChange, InventoryNameChange, handleInventoryNameChange }) => {
    return (
        <Box sx={wholeConProducts}>
            <Box sx={headerProducts}>
                <h2>{Messages.PRODUCTS_PAGE_HEADER}</h2>
            </Box>
            <Box sx={container}>
                    <Box sx={body2}><TextField style={inputStyleShopsInven} label={Messages.SHOP_NAME} value={ShopNameChange} onChange = {handleShopNameChange}/></Box><br /><br />
                    <Box sx={body2}><TextField style={inputStyleShopsInven} label={Messages.INVENTORY_NAME} value={InventoryNameChange} onChange = {handleInventoryNameChange}/></Box><br /><br />
                    <Box sx={body2}><TextField style={inputStyleShopsInven} label={Messages.PRODUCT_NAME} value={ProductNameChange} onChange = {handleProductNameChange} /></Box><br /><br />
                    <Box sx={body2}><TextField style={inputStyleShopsInven} label={Messages.PRODUCT_QUANTITY} value={ProductQuantityChange} onChange = {handleProductQuantityChange} /></Box><br /><br />
                    <Box sx={body2}><TextField style={inputStyleShopsInven} label={Messages.PRODUCT_PRICE} value={ProductPriceChange} onChange = {handleProductPriceChange} /></Box><br /><br />
                    {!isLoading ? <Box sx={submitButton}><Button onClick={handleAlert} variant="contained">{Messages.ADD_PRODUCT}</Button></Box> : <Box sx={submitButton}><CircularProgress /></Box>}

                    {showAlert &&
                        <Box>
                            <Alert sx={alertStyle}>
                                {Messages.PRODUCT_ADDED_SUCCESSFULLY}
                            </Alert>
                        </Box>
                    }
            </Box>
        </Box>
    )
}
export default AddProductsComponents