import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { slice as wishListSlice } from './wishListSlice'

const makeStore = () => {
  return configureStore({
    reducer: {
      [wishListSlice.name]: wishListSlice.reducer,
    },
  })
}

export const storeWrapper = createWrapper(makeStore)
