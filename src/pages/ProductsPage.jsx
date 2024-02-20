import React from 'react'
//context
import { useProducts } from '../context/ProductsProvider'
//styles
import styles from './ProductsPage.module.css'
//componets
import Card from '../components/Card'

function ProductsPage() {
  const products = useProducts()
  console.log(products)
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map(product =><Card key={product.id} product={product}/> )}
      </div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  )
}

export default ProductsPage