import { configureStore } from "@reduxjs/toolkit"
import counter from "./slices/counter.slice"
import text from "./slices/text.slice"

export default configureStore({
  reducer: {
counter,
text
  }
})