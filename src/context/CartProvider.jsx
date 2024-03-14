import React, { createContext, useContext, useReducer } from 'react'
//function
import { sumProducts } from '../helpers/helper';

const CartContext = createContext()

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total:0,
    checkout:false
};

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1})
            }
            return{
                ...state,
                checkout:false,
                ...sumProducts(state.selectedItems)
            }
        case "INCREASE":
            const increaseIndex= state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[increaseIndex].quantity++ 
            return{
                ...state,
                ...sumProducts(state.selectedItems)
            }
        case "DECREASE":
            const decreaseIndex= state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
            return{
                ...state,
                ...sumProducts(state.selectedItems)
            }
        case "DELETE":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
              return {
                ...state,
                selectedItems:[...newSelectedItems],
                ...sumProducts(newSelectedItems)
              }
        case "CHECKOUT":
            return{
                selectedItems : [],
                itemsCounter : 0,
                total:0,
                checkout:true
            }      
        default :
            throw new Error('Invalid action')
    }
}
function CartProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}
const useCart = () => {
    const {state,dispatch}= useContext(CartContext);
    return [state,dispatch]
}
export default CartProvider
export {useCart}