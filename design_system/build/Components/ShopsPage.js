import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { Button } from '@mui/material';
import { shopsPageMockData } from '../MockData/ShopsPage';
import backgroundImage from './background.avif';
export default function ShopsPage() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/InventoryPage');
    };
    const wholeContainer = {
        overflow: 'auto',
        minWidth: '800px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };
    const boxContainer = {
        height: '40vh',
        maxHeight: '70vh',
        overflowY: 'auto',
    };
    const buttonContainer = {
        display: 'flex',
        border: '1px',
        borderRadius: '8px',
        padding: '30px',
        marginBottom: '30px',
    };
    const container = {
        minHeight: '40vh',
        display: 'flex',
        border: '1px',
        marginTop: '10px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    };
    const addShopsButton = {
        '&.addShopsBut.MuiButton-contained': {
            paddingRight: '10px',
            marginRight: '10px',
        }
    };
    const button1 = {
        marginRight: '5px'
    };
    const searchButton = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '20vh',
    };
    const body = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        alignItems: 'center',
        marginTop: '300px'
    };
    const [selectShop, setSelectShop] = React.useState('');
    const handleChange = (event) => {
        setSelectShop(event.target.value);
    };
    const navigation = useNavigate();
    const handleAddShopsClick = () => {
        navigation('/AddShops');
    };
    const handleAddInventoriesClick = () => {
        navigation('/AddInventories');
    };
    const handleAddProductsClick = () => {
        navigation('/AddProducts');
    };
    const showLoaderForOneSecond = () => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'block';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1000);
        }
    };
    const generateMenuItems = () => {
        return shopsPageMockData.shopsList.map((shop) => (_jsx(MenuItem, { children: _jsx("span", { children: shop.options[0].label }, void 0) }, void 0)));
    };
    return (_jsxs(Box, Object.assign({ sx: wholeContainer }, { children: [_jsxs(Box, Object.assign({ sx: buttonContainer }, { children: [_jsx(Box, Object.assign({ sx: button1 }, { children: _jsx(Button, Object.assign({ onClick: handleAddShopsClick, variant: "contained" }, { children: " ADD SHOPS " }), void 0) }), void 0), _jsx(Box, Object.assign({ sx: button1 }, { children: _jsx(Button, Object.assign({ onClick: handleAddInventoriesClick, variant: "contained" }, { children: " ADD INVENTORIES " }), void 0) }), void 0), _jsx(Box, Object.assign({ sx: button1 }, { children: _jsx(Button, Object.assign({ onClick: handleAddProductsClick, variant: "contained" }, { children: " ADD PRODUCTS " }), void 0) }), void 0)] }), void 0), _jsx(Box, Object.assign({ sx: body }, { children: _jsxs(FormControl, Object.assign({ sx: { width: 500 } }, { children: [_jsx(InputLabel, Object.assign({ id: "searchShop" }, { children: "SEARCH SHOP" }), void 0), _jsx(Select, Object.assign({ labelId: 'searchShop', id: 'search', value: selectShop, label: "SEARCH SHOP", onChange: handleChange, sx: { width: '100%' } }, { children: generateMenuItems() }), void 0)] }), void 0) }), void 0), _jsx(Box, Object.assign({ sx: searchButton }, { children: _jsx(Button, Object.assign({ onClick: handleSubmit, variant: "contained" }, { children: "SUBMIT" }), void 0) }), void 0)] }), void 0));
}
