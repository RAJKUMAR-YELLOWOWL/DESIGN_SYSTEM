import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FormControl, MenuItem, Select, InputLabel, SxProps, Theme, SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { productsPageMockData } from '../MockData/ProductsPage';
import backgroundImage from './background.avif';
import { Messages } from './Context';
import { Message } from '@material-ui/icons';

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
  flex:1
}


type ProductsPageProps = {
  shopName: string;
  inventoryName: string;
  hasError: Boolean;
  isLoading: Boolean;
  productName: string;
  tables: Table[];
};

type Table = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  selectedProduct: string;
};

type Product = {
  sno: number;
  name: string;
  quantity: string;
  price: string;
};

const ProductsPageComponent:React.FC<ProductsPageProps> =(props)=> {

  const column:GridColDef[]=[
    {field:'sno', headerName:'S.No', width:375},
    {field:'name', headerName:'Name', width:375},
    {field:'quantity', headerName:'Quantity', width:375},
    {field:'price', headerName:'Price', width:375},
  ];

  const dataForTable = () => {
    const allProducts: Product[] = [];
    props.tables.forEach((table) => {
        allProducts.push(...table.products);
    });

    return allProducts.map((product) => ({
        id: product.sno,
        sno: product.sno,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
    }));
};

  return (
    <Box sx = {wholeContainer}>
    <Box sx = {ShopInvName}>
       <Box sx = {ShopName}>{Messages.SHOP_NAME}:{props.shopName}</Box>
       <Box sx = {InventoryName}><label>{Messages.INVENTORY_NAME}{props.inventoryName}</label></Box>
    </Box>    
    <Box sx={body}>
     <div style={{height: 400, width: 1600 }}>
          <DataGrid
            rows={dataForTable()}
            columns={column}
            columnBuffer={8}
            checkboxSelection
            sx={{
              '& .MuiDataGrid-row': {
                backgroundColor: 'lightGreen',
              },
            }}
          />
        </div>
    <Box sx = {searchButton}><Button variant="contained">SUBMIT</Button></Box>

    </Box>

      
    </Box>
  );
}

export default ProductsPageComponent