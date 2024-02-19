import React from 'react'
import '../Css/AddProducts.css'

function AddInventories() {
  return (
    <div className='wholeConatainer'>
        <div className='header'>
            <h2>HERE YOU CAN ADD THE INVENTORIES</h2>
        </div>
        <div className='body'>
            <div>
                <label>ENTER THE SHOP NAME WHERE YOU WANT TO ADD THIS PRODUCT :</label>
                <input className='input' type='text'></input><br/><br/>
            </div>
            <div>
                <label>ENTER THE INVENTORY NAME : </label>
                <input className='input' type='text'></input><br/><br/>
            </div>
            <div className='productHeader'>
                <label className='productHeader' >PRODUCT DETAILS : </label><br/><br/>
            </div>
            <div className='productDetails'>
                <label>ENTER THE PRODUCT NAME : </label>
                <input className='input' type='text'></input><br/><br/>
                <label>ENTER THE PRODUCT TYPE : </label>
                <input className='input' type='text'></input><br/><br/>
                <label>ENTER THE PRODUCT PRICE : </label>
                <input className='input' type='text'></input><br/><br/> 
            </div> 
        </div>
    </div>

  )
}

export default AddInventories