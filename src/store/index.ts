import { configureStore } from '@reduxjs/toolkit'
import nameReducer from './name'

const store = configureStore({
  reducer: nameReducer,
})

export default store
