import React from 'react'
import { Link } from 'react-router-dom'
//icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
//funstions 
import { productQuantity, shorten } from '../helpers/helper';
//styles
import styles from './Card.module.css'
/* import { useCart } from '../context/CartProvider'; */

function Card({product}) {

  const {image,title,price,id} = product
  /* const [state,dispath] = useCart() */
  /* const quantity = productQuantity(state,id) */
  const quantity =0;

  const clickHandler = (type) =>{
    /* dispath({type:type,payload:product}) */
  }
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
                quantity===0 ? <button  onClick={()=>clickHandler("ADD")}><TbShoppingBagCheck/></button> 
                :<>
                  <button onClick={()=>clickHandler("INCREASE")}>+</button>{!!quantity && <span>{quantity}</span>}
                  {quantity === 1 ? <button onClick={()=>clickHandler("DELETE")}><MdDeleteOutline/></button> : <button onClick={()=>clickHandler("DECREASE")}>-</button>}
                  
                </>

              }

            </div>
        </div>
    </div>
  )
}

export default Card