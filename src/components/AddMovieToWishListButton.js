import { useDispatch } from 'react-redux'
import { addToWishList } from '@/store/wishListSlice'

export default function AddMovieToWishListButton({ movie }) {
  const dispatch = useDispatch()
  const handlerAddToWishList = () => {
    dispatch(addToWishList(movie))
  }

  return (
    <button className="to-wish-list-button" onClick={handlerAddToWishList}>
      Add to wish list ❤️
    </button>
  )
}
