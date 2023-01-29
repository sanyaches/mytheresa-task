import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  wishList: [],
}

export const slice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList(state, action) {
      if (!action.payload) {
        return
      }

      if (!state.wishList.some((movie) => movie.id === action.payload.id)) {
        state.wishList.push(action.payload)
      }
    },
    setWishList(state, action) {
      state.wishList = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.wishList,
      }
    },
  },
})

export const { addToWishList, setWishList } = slice.actions
export const selectWishListState = (state) => state.wishList.wishList
export default slice.reducer
