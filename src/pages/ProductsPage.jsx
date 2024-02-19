import React from 'react'

import { useProducts } from '../context/ProductsProvider'

function ProductsPage() {
  const products = useProducts()
  console.log(products)
  return (
    <div>Products</div>
  )
}

export default ProductsPage