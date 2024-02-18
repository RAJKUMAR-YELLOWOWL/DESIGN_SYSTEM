import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './MockData';
import '../Css/ShopsPage.css';

export default function PresentationLayer() {

  const showLoaderForOneSecond = () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'block'; 
      setTimeout(() => {
        loader.style.display = 'none'; 
      }, 1000);
    }
  };

  return (
    <div className='wholeContainer'>
      <Box sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex', padding: '10px' }}>
          <TextField
            id="searchShop"
            label="Search for shop"
            fullWidth
          ></TextField>
          <TextField
            id="searchInventory"
            label="Select for inventory"
            fullWidth
            sx={{ marginLeft: '10px' }}
          ></TextField>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button style={{ padding: '10px 20px', borderRadius: '7px' }} onClick={showLoaderForOneSecond}>Submit</button>
        </Box>
        <div  id="loader" style={{ display: 'none' }}>Loading...</div>


        <div className='boxContainer'>
          <Box sx={{ marginTop: '30px', overflowX: 'auto' }}>
            <DataGrid
              rows={rows}
              columns={[
                { field: 'id', headerName: 'ID', flex: 1 },
                { field: 'shop', headerName: 'Shop', flex: 1 },
                { field: 'inventory', headerName: 'Inventory', flex: 1 },
                { field: 'products', headerName: 'Products', flex: 1 }
              ]}
              checkboxSelection
            />
          </Box>
        </div>


        <div className='container2'>
          <div className='content1'>
            <p>
              sabgfvervgufcwebFUGWBEUFVBGERJKSBVFGREJGBUSJKSJKFFVBJKJERV KJERAGVBRER FUERGFUYEBRVKRV
            </p>
          </div>
          <div className='content2'>
            <p>
              FHWEAIUFGEWHIFUEWGFUY GUIGFWUEYGYDHWEUIWGFEUHWIOAEUGFWOIUEFHIWUE FIUWEGFYUGWIEUFG IWUEGFWUIEYGIWUEFHIWUAEGHWIUERGFWIEUFHWIEUFGWIEUFHCGWIUE
            </p>
          </div>
          <div className='content3'>
            <p>
              FHWEAIUFGEWHIFUEWGFUY GUIGFWUEYGYDHWEUIWGFEUHWIOAEUGFWOIUEFHIWUE FIUWEGFYUGWIEUFG IWUEGFWUIEYGIWUEFHIWUAEGHWIUERGFWIEUFHWIEUFGWIEUFHCGWIUE DFEDDFBHEUF
              FEWUGEWFUYGGWEUFWEGFRVFERGERBERVERKUFBHVIEURLGHUIERHFOIESJFOIRHHHHHS;EFJCCCCCCCCCCCCCCCCCCCCCCCCCCCSLIDKFMGHELCOIWE
            </p>
          </div>
        </div>

      </Box>
    </div>
  );
}
