import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
//funstions 
import { shorten } from '../helpers/helper';
//styles
import styles from './Card.module.css'

function Card({product}) {

  const {image,title,price,id} = product
  return (
    <div className={styles.card}>
        <img  src={image} alt={title}/>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}>
              <TbListDetails/>
            </Link>
            <div>
              <button>
                <TbShoppingBagCheck/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Card