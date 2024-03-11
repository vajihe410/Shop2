import React from 'react'
//icons
import { FaListUl } from "react-icons/fa";
//styles
import styles from "../pages/ProductsPage.module.css"
//functions
import { createQueryObject } from '../helpers/helper';

function Sidebar({setQuery}) {

  const categoriesHandler = (event) => {
    const {tagName} = event.target
    const category = event.target.innerText.toLowerCase()
    if(tagName !== "LI") return
    setQuery(query => (createQueryObject(query,{category})))
  }

  return (
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
  )
}

export default Sidebar