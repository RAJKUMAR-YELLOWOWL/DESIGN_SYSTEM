import React from 'react'
import '../Css/AddShops.css'

function AddShops() {
  return (
    <div className='wholeConShops'>
        <div className='headerShops'>
            <h2>HERE YOU CAN ADD THE SHOPS</h2>
        </div>
        <div className='bodyShops'>
            <div>
                <label className='labelShops1'>ENTER THE SHOP NAME      : </label>
                <input className='inputShops1' type='text'></input><br/><br/>
            </div>
            <div>        
                <label className='labelShops'>ENTER THE SHOPLOCATION : </label>
                <input className='inputShops2' type='text'></input><br/><br/>
            </div>            
                <button className='buttonShops'>ADD SHOP</button>
        </div>
    </div>
  )
}
export default AddShops
