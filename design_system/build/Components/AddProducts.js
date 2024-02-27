import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
function AddProducts() {
    const navigation = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const handleAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };
    const wholeConProducts = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth: '800px',
    };
    const headerProducts = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 'x-large',
        marginLeft: '-90px'
    };
    const container = {
        display: 'flex',
        width: '800px',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: -20,
    };
    const bodyProducts = {
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
        minHeight: '27px',
    };
    const inputStyleShopsInven = {
        minWidth: '310px',
        minHeight: '27px'
    };
    const productDetails = {
        marginTop: '20px',
        marginLeft: '20px',
        fontFamily: 'TimesNewRoman',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '700px',
        backgroundColor: 'lightgreen',
        border: '1px',
        borderRadius: '5px'
    };
    const ProductDetailsPart = {
        display: 'flex',
        flexDirection: 'row',
    };
    const productDetails1 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontSize: '25px'
    };
    const productDetails2 = {
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
    return (_jsxs(Box, Object.assign({ sx: wholeConProducts }, { children: [_jsx(Box, Object.assign({ sx: headerProducts }, { children: _jsx("h2", { children: "HERE YOU CAN ADD THE PRODUCT" }, void 0) }), void 0), _jsxs(Box, Object.assign({ sx: container }, { children: [_jsxs(Box, Object.assign({ sx: bodyProducts }, { children: [_jsx(Box, Object.assign({ sx: body1 }, { children: _jsx("label", { children: "ENTER THE SHOP NAME      : " }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: body2 }, { children: _jsx("input", { style: inputStyleShopsInven, placeholder: "SHOP NAME", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0)] }), void 0), _jsxs(Box, Object.assign({ sx: bodyProducts }, { children: [_jsx(Box, Object.assign({ sx: body1 }, { children: _jsx("label", { children: "ENTER THE INVENTORY NAME  : " }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: body2 }, { children: _jsx("input", { style: inputStyleShopsInven, placeholder: "INVENTORY NAME", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsx(Box, Object.assign({ sx: bodyProducts }, { children: _jsx(Box, Object.assign({ sx: body1 }, { children: "ENTER THE PRODUCT DETAILS " }), void 0) }), void 0), _jsxs(Box, Object.assign({ sx: productDetails }, { children: [_jsxs(Box, Object.assign({ sx: ProductDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: productDetails1 }, { children: _jsx("label", { children: "ENTER THE NAME :" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: productDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "COUNTRY", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsxs(Box, Object.assign({ sx: ProductDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: productDetails1 }, { children: _jsx("label", { children: "ENTER THE QUANTITY :" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: productDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "STATE", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), _jsxs(Box, Object.assign({ sx: ProductDetailsPart }, { children: [_jsx(Box, Object.assign({ sx: productDetails1 }, { children: _jsx("label", { children: "ENTER THE PRICE:" }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: productDetails2 }, { children: _jsx("input", { style: inputStyle, placeholder: "CITY", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0)] }), void 0), _jsx(Box, Object.assign({ sx: submitButton }, { children: _jsx(Button, Object.assign({ onClick: handleAlert, variant: "contained" }, { children: "ADD PRODUCT" }), void 0) }), void 0), showAlert &&
                        _jsx(Box, { children: _jsx(Alert, Object.assign({ sx: alertStyle }, { children: "PRODUCTS ADDED SUCCESSFULLY" }), void 0) }, void 0)] }), void 0)] }), void 0));
}
export default AddProducts;
