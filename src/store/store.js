import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { wishListSlice } from './wishListSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      [wishListSlice.name]: wishListSlice.reducer,
    },
    devTools: true,
  })

export const wrapper = createWrapper(makeStore)
