import { configureStore, createSlice } from "@reduxjs/toolkit";

//  만들기
let user = createSlice({
    name: 'user',
    initialState:'Kim'
  })

  //  속성명", 초기값

//  export
export default configureStore(
  {
    reducer:{
      user:user.reducer
    }
  }
)