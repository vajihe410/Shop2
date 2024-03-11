import React from 'react'
//icons
import { FaListUl } from "react-icons/fa";
//styles
import styles from "./Sidebar.module.css"
//functions
import { createQueryObject } from '../helpers/helper';
//constants
import { categories } from '../constants/list';

function Sidebar({query , setQuery}) {

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
        {categories.map(item => (
            <li 
            key={item.id} 
            className={item.type.toLowerCase() === query.category ? styles.selected : null}>
            {item.type}</li>))}
    </ul>
    </div>
  )
}

export default Sidebar