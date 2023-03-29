import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => {
      return state + 1;
    },
    decrement: state => {
      return state -1;
    },
    reset: state => {
     return state = 0;
    },
    setEspecificValue: (state, action) => {
      return action.payload
    }
  }
})

export const {increment, decrement, reset, setEspecificValue} = counterSlice.actions

export default counterSlice.reducer