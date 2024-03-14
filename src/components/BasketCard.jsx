import React from 'react'
//functions
import { shorten } from '../helpers/helper'
//icons
import { MdDeleteOutline } from "react-icons/md";
//styles
import styles from './BasketCard/module.css'

function BasketCard({data,clickHandler}) {
 
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shorten(data.title)}</p >
        <div className={styles.actions}>
            {data.quantity===1 ? <button onClick={() => clickHandler("DELETE",data)}><MdDeleteOutline/></button> : <button onClick={() => clickHandler("DECREASE",data)}>-</button>} 
            <span>{data.quantity}</span>
            <button onClick={() => clickHandler("INCREASE",data)}>+</button>
        </div>
    </div>
  )
}

export default BasketCard