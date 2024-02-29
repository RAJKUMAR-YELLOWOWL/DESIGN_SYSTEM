// import { Button, SxProps, Theme, Typography, Box } from "@mui/material";
// import backgroundImage from './background.avif';
// import { useState } from "react";
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';
// import { Messages } from "./Context";

// const wholeConInventories: SxProps<Theme> = {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minWidth: '800px',
// }

// const headerInventories: SxProps<Theme> = {
//     display: 'flex',
//     justifyContent: 'center',
//     fontFamily: 'Times New Roman, Times, serif',
//     fontSize: 'x-large',
// }

// const container: SxProps<Theme> = {
//     display: 'flex',
//     width: '800px',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     flex: 1,
//     marginTop: -20,
// }

// const bodyInventories: SxProps<Theme> = {
//     display: 'flex',
//     flexDirection: 'row',
// }

// const body1: SxProps<Theme> = {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     fontFamily: 'timesnewroman',
//     fontSize: '25px',
// }

// const body2: SxProps<Theme> = {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     marginTop: '10px',
// }

// const inputStyle = {
//     minWidth: '300px',
//     minHeight: '27px'
// };

// const AddButton: SxProps<Theme> = {
//     display: 'flex',
//     borderRadius: '20px',
//     height: '25px',
//     justifyContent: 'center',
//     marginTop: '20px'
// }

// const submitButton: SxProps<Theme> = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '10vh',
// }

// const alertStyle: SxProps<Theme> = {
//     position: 'fixed',
//     top: '20px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     zIndex: 9999,
//     maxWidth: '90%',
//     width: '300px',
// }

// type AddInventoriesProps = {
//         handleNavigation: () => void; 
//         handleAddInventory: ()=>void;
//         hasError : Boolean;
//         isLoading : Boolean;
//         onSubmitClick : () => void;
//         showAlert:Boolean;
//         loading:Boolean;
//         addInventoryCount:number
// }

// export const AddInventoriesComponent: React.FC<AddInventoriesProps> = ({handleNavigation, handleAddInventory, addInventoryCount, showAlert, loading}) => {

//     const renderInventoryInputs = () => {
//         const Inputs = [];
//         for (let i = 0; i < addInventoryCount; i++) {
//             Inputs.push(
//                 <Box sx={bodyInventories}>
//                     <Box sx={body1}>ENTER THE INVENTORY NAME :</Box>
//                     <Box sx={body2}><input style={inputStyle} placeholder="INVENTORY NAME" type='text'></input></Box>
//                 </Box>

//             )
//         }
//         return Inputs;
//     }

//     return (
//         <Box sx={wholeConInventories}>
//             <Box sx={headerInventories}>
//                 <h2>{Messages.SHOPS_PAGE_HEADER}</h2>
//             </Box>
//             <Box sx={container}>
//                 <Box sx={bodyInventories}>
//                     <Box sx={body1}><label>ENTER THE SHOP NAME      : </label></Box>
//                     <Box sx={body2}><input style={inputStyle} placeholder="SHOP NAME" type='text'></input></Box><br /><br /><br /><br />
//                 </Box>

//                 {renderInventoryInputs()}

//                 <Box sx={AddButton}><Button onClick={handleAddInventory} variant="contained">ADD</Button></Box>
//                 <Box sx={submitButton}><Button onClick={handleNavigation} variant="contained">ADD INVENTORIES</Button></Box>
//                 {loading && <label>LOADING....</label>}
//                 {showAlert &&
//                     <Box sx={alertStyle}>
//                         <Alert>
//                             INVENTORY ADDED SUCCESSFULLY
//                         </Alert>
//                     </Box>}
//             </Box>
//         </Box>
//     )
// }

import React from 'react';
import { Button, SxProps, Theme, Typography, Box } from "@mui/material";
import backgroundImage from './background.avif';
import Alert from '@mui/material/Alert';
import { Messages } from "./Context";

const wholeConInventories: SxProps<Theme> = {
    minHeight: '100vh',
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
}

const container: SxProps<Theme> = {
    display: 'flex',
    width: '800px',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginTop: -20,
}

const bodyInventories: SxProps<Theme> = {
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
    marginTop: '10px',
}

const inputStyle = {
    minWidth: '300px',
    minHeight: '27px'
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

type AddInventoriesProps = {
    shopName: string;
    addInventoryCount: number;
    hasError: Boolean;
    isLoading: Boolean;
    showAlert: Boolean;
    loading: Boolean;
    handleNavigation: () => void;
    handleAddInventory: () => void;
    handleShopNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    onSubmitClick: () => void;
}

export const AddInventoriesComponent: React.FC<AddInventoriesProps> = ({
    handleNavigation,
    handleAddInventory,
    addInventoryCount,
    showAlert,
    loading,
    handleShopNameChange, 
    shopName,
}) => {

    return (
        <Box sx={wholeConInventories}>
            <Box sx={headerInventories}>
                <h2>{Messages.SHOPS_PAGE_HEADER}</h2>   
            </Box>
            <Box sx={container}>
                <Box sx={bodyInventories}>
                    <Box sx={body1}><label>{Messages.SHOP_NAME_LABEL} </label></Box>
                    <Box sx={body2}><input style={inputStyle} placeholder="SHOP NAME" type='text' value={shopName} onChange={handleShopNameChange} /></Box><br /><br /><br /><br />
                </Box>

                {Array.from({ length: addInventoryCount }).map((_, index) => (
                    <Box sx={bodyInventories} key={index}>
                        <Box sx={body1}>{Messages.INVEMTORY_NAME_LABEL}</Box>
                        <Box sx={body2}><input style={inputStyle} placeholder="INVENTORY NAME" type='text'></input></Box>
                    </Box>
                ))}

                <Box sx={AddButton}><Button onClick={handleAddInventory} variant="contained">ADD</Button></Box>
                <Box sx={submitButton}><Button onClick={handleNavigation} variant="contained">ADD INVENTORIES</Button></Box>
                {loading && <label>{Messages.LOADER}</label>}
                {showAlert &&
                    <Box sx={alertStyle}>
                        <Alert>
                            {Messages.INVENTORY_ADDED_ALERT}
                        </Alert>
                    </Box>}
            </Box>
        </Box>
    )
}
