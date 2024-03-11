import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
//context
import { useProducts } from '../context/ProductsProvider'
//styles
import styles from './ProductsPage.module.css'
//componets
import Card from '../components/Card'
import Loader from '../components/Loader'
//icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//functions
import { createQueryObject, filterProducts, searchProducts, getInitialQuery } from '../helpers/helper'

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

  const SearchHandler = () => {
    setQuery(query => (createQueryObject(query,{search})))
  }
  const categoriesHandler = (event) => {
    
    const {tagName} = event.target
    const category = event.target.innerText.toLowerCase()
  
    if(tagName !== "LI") return

    setQuery(query => (createQueryObject(query,{category})))
  }
  return (
    <>
      <div>
        <input placeholder='Search...' type='text' value={search} onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}/>
        <button onClick={SearchHandler}><ImSearch /></button>
      </div>
      <div className={styles.container}>
      {!showProducts.length && <Loader/> }
      <div className={styles.products}>
        {showProducts.map(product =><Card key={product.id} product={product}/> )}
      </div>
      <div className={styles.sidebar}>
      <div>
        <FaListUl/>
        <p>Categories</p>
      </div>
      <ul onClick={categoriesHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Woman's Clothong</li>
      </ul>
      </div>
    </div>
    </>

  )
}

export default ProductsPage