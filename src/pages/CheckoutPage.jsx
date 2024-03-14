import React from 'react'
//context
import { useCart } from '../context/CartProvider'
//components
import BasketCard from '../components/BasketCard'
import BasketSidebar from '../components/BasketSidebar'
//styles
import styles from './CheckoutPage/module.css'

function CheckoutPage() {
  const [state,dispach]= useCart()
  const clickHandler = (type,payload) => {
    dispach({type,payload})
  }
  if(state.itemsCounter){
    return(<div className={styles.container}>
      <p>Empty</p>
    </div>)
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems.map(product =><BasketCard key={product.id} data={product} clickHandler={clickHandler}/> )}
      </div>
    </div>
  )
}

export default CheckoutPage