import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
//funstions 
import { productQuantity, shorten } from '../helpers/helper';
//styles
import styles from './Card.module.css'
//actions
import { add, decrease, increase, remove } from '../features/Cart/cartSlice';
/* import { useCart } from '../context/CartProvider'; */

function Card({product}) {

  const {image,title,price,id} = product

  const dispatch = useDispatch()
  const state = useSelector(store => store.cart)

  /* const [state,dispath] = useCart() */
  const quantity = productQuantity(state,id)
 
 /*  const clickHandler = (type) =>{
    dispatch({type:type,payload:product})
  } */
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
              {
                quantity===0 ? <button  onClick={()=>/* clickHandler("ADD") */ dispatch(add(product))}><TbShoppingBagCheck/></button> 
                :<>
                  <button onClick={()=>/* clickHandler("INCREASE") */dispatch(increase(product))}>+</button>{!!quantity && <span>{quantity}</span>}
                  {quantity === 1 ? <button onClick={()=>/* clickHandler("DELETE") */dispatch(remove(product))}><MdDeleteOutline/></button> : <button onClick={()=>/* clickHandler("DECREASE") */dispatch(decrease(product))}>-</button>}
                  
                </>

              }

            </div>
        </div>
    </div>
  )
}

export default Card