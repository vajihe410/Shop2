import React from 'react'
//context
import { useProducts } from '../context/ProductsProvider'
//styles
import styles from './ProductsPage.module.css'
//componets
import Card from '../components/Card'
import Loader from '../components/Loader'

function ProductsPage() {
  const products = useProducts()
  return (
    <div className={styles.container}>
      {!products.length && <Loader/> }
      <div className={styles.products}>
        {products.map(product =><Card key={product.id} product={product}/> )}
      </div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  )
}

export default ProductsPage