import React from 'react'
import { productsPageMockData } from '../MockData/ProductsPage'
import ProductsPageComponent from '../Components/ProductsPage'

const ProductsPage =()=> {
  return (
    <ProductsPageComponent
    {...productsPageMockData}
    />
  )
}

export default ProductsPage