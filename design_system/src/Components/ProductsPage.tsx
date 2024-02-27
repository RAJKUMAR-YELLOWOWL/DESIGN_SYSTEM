import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { productsPageMockData } from '../MockData/ProductsPage';
import backgroundImage from './background.avif';


export default function ProductsPage() {

  const column:GridColDef[]=[
    {field:'sno', headerName:'S.No', width:100},
    {field:'name', headerName:'Name', width:100},
    {field:'quantity', headerName:'Quantity', width:100},
    {field:'price', headerName:'Price', width:100},
  ];

  const dataForTable = () =>{
    return productsPageMockData.tables[0].products.map((product)=>(
        {
            id: product.sno,
            sno: product.sno,
            name: product.name,
            quantity: product.quantity,
            price: product.price,
        }
    ))
  }
  
  const wholeContainer : SxProps<Theme> = {
    display:'flex',
    flexDirection:'column',
    overflow:'auto',
    minWidth:'800px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '100vh',
  }

  const searchButton: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '20vh', 
  };

  const ShopInvName: SxProps<Theme> = {
    display:'flex',
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  }

  const ShopName:SxProps<Theme> = {
    flex:1,
    textAlign:'right',
    justifyContent:'center',
    fontFamily:'TimesNewRoman',
    fontSize:'30px',
  }

  const InventoryName:SxProps<Theme> = {
    flex:1,
    textAlign:'left',
    marginLeft:'100px',
    fontFamily:'TimesNewRoman',
    fontSize:'30px',
  }

  const body : SxProps<Theme> = {
    display: 'flex',
    flexDirection:'column', 
    padding: '10px', 
    alignItems:'center',
    // marginTop:'300px',
    flex:1
  }
  
  const generateMenuItems = () => {
    return productsPageMockData.tables[0].products.map((product)=>(
        <MenuItem>
        <span>{product.name}</span>
        </MenuItem>
    ))
  }

  return (
    <Box sx = {wholeContainer}>
    <Box sx = {ShopInvName}>
       <Box sx = {ShopName}>SHOPNAME</Box>
       <Box sx = {InventoryName}><label>INVENTORYNAME</label></Box>
    </Box>    
    <Box sx={body}>
     <div style={{height: 400, width: '70%' }}>
          <DataGrid
            rows={dataForTable()}
            columns={column}
            columnBuffer={8}
          />
        </div>
    <Box sx = {searchButton}><Button variant="contained">SUBMIT</Button></Box>

    </Box>

      
    </Box>
  );
}
