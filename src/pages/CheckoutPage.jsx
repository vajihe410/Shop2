import React from 'react'
//context
import { useCart } from '../context/CartProvider'
//components
import BasketCard from '../components/BasketCard'

function CheckoutPage() {
  const [state,dispach]= useCart()
  const clickHandler = (type,payload) => {
    dispach({type,payload})
  }
  if(state.itemsCounter){
    return(<div>
      <p>Empty</p>
    </div>)
  }
  return (
    <div>
      <div></div>
        {state.selectedItems.map(product =><BasketCard key={product.id} data={product} clickHandler={clickHandler}/> )}
  
    </div>
  )
}

export default CheckoutPage