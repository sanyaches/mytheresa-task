import { useSelector } from 'react-redux'
import { selectWishListState } from '@/store/wishListSlice'

export default function WishList() {
  const wishList = useSelector(selectWishListState)
  const getWishList = (items) => {
    return items.map((item) => <div key={item.id}>{item.title}</div>)
  }
  const content = wishList.length > 0 ? <div>{getWishList(wishList)}</div> : <div>List is empty</div>

  return <div>{content}</div>
}
