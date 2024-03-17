import React from 'react'
import { useDispatch } from 'react-redux';
//icons
import {TbChecklist} from 'react-icons/tb'
import {FaHashtag} from 'react-icons/fa6'
import {BsPatchCheck} from 'react-icons/bs'
//styles
import styles from './BasketSidebar.module.css';
//actions
import { checkout } from '../features/Cart/cartSlice';

function BasketSidebar({state /* , clickhandler */}) {
  const dispatch = useDispatch()
  return (
    <div className={styles.sidebar}>
        <div>
            <TbChecklist/>
            <p>Total: </p> 
            <span>{state.total} $</span>
        </div>
        <div>
            <FaHashtag/>
            <p>Quantity:</p> 
            <span>{state.itemsCounter} $</span>
        </div>
        <div>
            <BsPatchCheck/>
            <p>Status:</p> 
            <span>{!state.checkout && <p>Pending...</p> }</span>
        </div>
        <button onClick={() => /* clickhandler("CHECKOUT") */dispatch(checkout)}>Checkout</button>
    </div>
  )
}

export default BasketSidebar