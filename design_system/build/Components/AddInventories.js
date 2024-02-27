import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from './background.avif';
import { useState } from "react";
import Alert from '@mui/material/Alert';
function AddInventories() {
    const navigation = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [addInventoryCount, setAddInventoryCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const handleNavigation = () => {
        setShowAlert(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        setTimeout(() => {
            setShowAlert(false);
            navigation('/AddProducts');
        }, 2000);
    };
    const handleAddInventory = () => {
        setAddInventoryCount(prevCount => prevCount + 1);
    };
    const renderInventoryInputs = () => {
        const Inputs = [];
        for (let i = 0; i < addInventoryCount; i++) {
            Inputs.push(_jsxs(Box, Object.assign({ sx: bodyInventories }, { children: [_jsx(Box, Object.assign({ sx: body1 }, { children: "ENTER THE INVENTORY NAME :" }), void 0), _jsx(Box, Object.assign({ sx: body2 }, { children: _jsx("input", { style: inputStyle, placeholder: "INVENTORY NAME", type: 'text' }, void 0) }), void 0)] }), void 0));
        }
        return Inputs;
    };
    const wholeConInventories = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth: '800px',
    };
    const headerInventories = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Times New Roman, Times, serif',
        fontSize: 'x-large',
    };
    const container = {
        display: 'flex',
        width: '800px',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        marginTop: -20,
    };
    const bodyInventories = {
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
    const AddButtonInput = {};
    const body2 = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        marginTop: '10px',
    };
    const inputStyle = {
        minWidth: '300px',
        minHeight: '27px'
    };
    const AddButton = {
        display: 'flex',
        borderRadius: '20px',
        height: '25px',
        justifyContent: 'center',
        marginTop: '20px'
    };
    const submitButton = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh',
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
    return (_jsxs(Box, Object.assign({ sx: wholeConInventories }, { children: [_jsx(Box, Object.assign({ sx: headerInventories }, { children: _jsx("h2", { children: "HERE YOU CAN ADD THE INVENTORIES" }, void 0) }), void 0), _jsxs(Box, Object.assign({ sx: container }, { children: [_jsxs(Box, Object.assign({ sx: bodyInventories }, { children: [_jsx(Box, Object.assign({ sx: body1 }, { children: _jsx("label", { children: "ENTER THE SHOP NAME      : " }, void 0) }), void 0), _jsx(Box, Object.assign({ sx: body2 }, { children: _jsx("input", { style: inputStyle, placeholder: "SHOP NAME", type: 'text' }, void 0) }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0)] }), void 0), renderInventoryInputs(), _jsx(Box, Object.assign({ sx: AddButton }, { children: _jsx(Button, Object.assign({ onClick: handleAddInventory, variant: "contained" }, { children: "ADD" }), void 0) }), void 0), _jsx(Box, Object.assign({ sx: submitButton }, { children: _jsx(Button, Object.assign({ onClick: handleNavigation, variant: "contained" }, { children: "ADD INVENTORIES" }), void 0) }), void 0), loading && _jsx("label", { children: "LOADING...." }, void 0), showAlert &&
                        _jsx(Box, Object.assign({ sx: alertStyle }, { children: _jsx(Alert, { children: "INVENTORY ADDED SUCCESSFULLY" }, void 0) }), void 0)] }), void 0)] }), void 0));
}
export default AddInventories;
