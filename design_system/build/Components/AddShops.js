import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
function AddShops() {
    const navigation = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const handleNavigation = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            navigation('/AddInventories');
        }, 2000);
    };
    const wholeConShops = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth: '800px',
    };
    const headerShops = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 'x-large',
        marginLeft: '-90px'
    };
    const container = {
        display: 'flex',
        width: '700px',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: -20,
    };
    const bodyShops = {
        display: 'flex',
        flexDirection: 'row',
    };
    const body1 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontFamily: 'timesnewroman',
        fontSize: '25px',
    };
    const body2 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    };
    const inputStyle = {
        minWidth: '300px',
        minHeight: '27px'
    };
    const inputStyleShops = {
        minWidth: '310px',
        minHeight: '27px'
    };
    const shopDetails = {
        marginTop: '13px',
        marginLeft: '20px',
        fontFamily: 'TimesNewRoman',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '650px',
        backgroundColor: 'lightgreen',
        border: '1px',
        borderRadius: '5px'
    };
    const shopDetailsPart = {
        display: 'flex',
        flexDirection: 'row',
    };
    const shopDetails1 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontSize: '25px',
    };
    const shopDetails2 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        maxWidth: '315px'
    };
    const submitButton = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh'
    };
    const alertStyle = {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '90%',
        width: '300px',
    };
    return (_jsxs(Box, Object.assign({ sx: wholeConShops }, { children: [_jsx(Box, Object.assign({ sx: headerShops }, { children: _jsx("h2", { children: "HERE YOU CAN ADD THE SHOPS" }, void 0) }), void 0), _jsxs(Box, Object.assign({ sx: container }, { children: [_jsxs(Box, Object.assign({ sx: bodyShops }, { children: [_jsx(Box, Object.assign({ sx: body1 }, { children: _jsx("label", { children: "ENTER THE SHOP NAME      : " }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: body2 }, { children: _jsx("input", { style: inputStyleShops, placeholder: "SHOP NAME", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsx(Box, Object.assign({ sx: bodyShops }, { children: _jsx(Box, Object.assign({ sx: body1 }, { children: "ENTER THE SHOPLOCATION " }), void 0) }), void 0), _jsxs(Box, Object.assign({ sx: shopDetails }, { children: [_jsxs(Box, Object.assign({ sx: shopDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: shopDetails1 }, { children: _jsx("label", { children: "ENTER THE COUNTRY :" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: shopDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "COUNTRY", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsxs(Box, Object.assign({ sx: shopDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: shopDetails1 }, { children: _jsx("label", { children: "ENTER THE STATE :" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: shopDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "STATE", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsxs(Box, Object.assign({ sx: shopDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: shopDetails1 }, { children: _jsx("label", { children: "ENTER THE CITY :" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: shopDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "CITY", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0)] }), void 0), _jsx(Box, Object.assign({ sx: submitButton }, { children: _jsx(Button, Object.assign({ onClick: handleNavigation, variant: "contained" }, { children: "ADD SHOPS" }), void 0) }), void 0), showAlert &&
                        _jsx(Box, Object.assign({ sx: alertStyle }, { children: _jsx(Alert, { children: "SHOP ADDED SUCCESSFULLY" }, void 0) }), void 0)] }), void 0)] }), void 0));
}
export default AddShops;
