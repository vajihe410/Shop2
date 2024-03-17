import React from 'react'
import { useDispatch } from 'react-redux';
//functions
import { shorten } from '../helpers/helper'
//icons
import { MdDeleteOutline } from "react-icons/md";
//styles
import styles from './BasketCard.module.css'
//actions
import {remove,increase,decrease} from '../features/Cart/cartSlice'

function BasketCard({data/* ,clickHandler */}) {
  const dispatch = useDispatch()
 
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shorten(data.title)}</p >
        <div className={styles.actions}>
            {data.quantity===1 ? <button onClick={() => /* clickHandler("DELETE",data) */dispatch(remove(data))}><MdDeleteOutline/></button> : <button onClick={() =>/*  clickHandler("DECREASE",data) */dispatch(decrease(data))}>-</button>} 
            <span>{data.quantity}</span>
            <button onClick={() => /* clickHandler("INCREASE",data) */dispatch(increase(data))}>+</button>
        </div>
    </div>
  )
}

export default BasketCard