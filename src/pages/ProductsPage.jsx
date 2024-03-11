import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
//context
import { useProducts } from '../context/ProductsProvider'
//styles
import styles from './ProductsPage.module.css'
//componets
import Card from '../components/Card'
import Loader from '../components/Loader'
import SearchBox from '../components/SearchBox'
import Sidebar from '../components/Sidebar'

//functions
import { filterProducts, searchProducts, getInitialQuery } from '../helpers/helper'


function ProductsPage() {
  const products = useProducts()

  const [ search , setSearch ] = useState("")
  const [ showProducts , setShowProducts ] = useState([])
  const [ query , setQuery ] = useState({})
  const [ searchParams , setSearchParams ] = useSearchParams()

  useEffect(() => {
    setShowProducts(products)
    setQuery(getInitialQuery(searchParams))
  },[products])

  useEffect(()=>{
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts = searchProducts(products,query.search)
    finalProducts = filterProducts(finalProducts,query.category)

    setShowProducts(finalProducts)
 
  },[query])

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
      {!showProducts.length && <Loader/> }
      <div className={styles.products}>
        {showProducts.map(product =><Card key={product.id} product={product}/> )}
      </div>
     <Sidebar query={query} setQuery={setQuery}/>
    </div>
    </>

  )
}

export default ProductsPage