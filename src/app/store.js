import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Product/productSlice'
import cartReducer from "../features/Cart/cartSlice";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
})
export default store