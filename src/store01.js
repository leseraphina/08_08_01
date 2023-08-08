import { configureStore, createSlice } from "@reduxjs/toolkit";

let couter = createSlice({
  name:'couter',
  initialState:1
})

let cart = createSlice({
  name:'cart',
  initialState:[
    {id:0, name:'people01'},
    {id:1, name:'people02'},
    {id:2, name:'people03'}
  ]
})

export default configureStore({
  reducer:{
    couter:couter.reducer,
    cart:cart.reducer
  }
})