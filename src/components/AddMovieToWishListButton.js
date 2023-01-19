import { useDispatch, useSelector } from 'react-redux'
import { addToWishList, selectWishListState } from '@/store/wishListSlice'

export default function AddMovieToWishListButton({ movie }) {
  const wishListState = useSelector(selectWishListState)

  return <button className="to-wish-list-button">Add to wish list ❤️</button>
}
