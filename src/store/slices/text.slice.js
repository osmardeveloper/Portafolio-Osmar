import { createSlice } from "@reduxjs/toolkit"

const textSlice = createSlice({
  name: "text",
  initialState: "vacio",
  reducers: {
    modify: (state, action) => {
      return action.payload
    },
  }
})

export const {modify} = textSlice.actions

export default textSlice.reducer