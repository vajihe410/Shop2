import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Product/productSlice'

const store = configureStore({
    reducer:{
        products:productReducer
    }
})
export default store