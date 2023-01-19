import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { HYDRATE } from 'next-redux-wrapper'

// Initial state
const initialState = {
  wishList: [],
}

// Actual Slice
export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList(state, action) {
      if (action.payload) {
        state.wishList.push(action.payload)
      }
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.wishList,
        }
      },
    },
  },
})

export const { addToWishList } = wishListSlice.actions
export const selectWishListState = (state) => state.wishList.wishList
export default wishListSlice.reducer
