import React from 'react'
import Cartcount from './cart/Cartcount'
import Cartempty from './cart/Cartempty'
import Cartitem from './cart/Cartitem'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartItem, selectCartState,setCloseCart } from '../app/Cartslice'

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState= useSelector(selectCartState);
  const cartItems= useSelector(selectCartItem)
 
  console.log(cartItems)

  const onCartToggle=()=>{
    dispatch(setCloseCart(
     { cartState: false}
    ))
  }
  return (
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full blur-effect-theme h-screen opacity-100 z-[300] 
    ${ifCartState? 'opacity-100 visible translate-x-0':'opacity-0 translate-x-8 invisible '} `}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <Cartcount onCartToggle={onCartToggle}/>
            {cartItems?.length === 0? <Cartempty />:<div> 
              <div>{cartItems.map((items,i)=>( <Cartitem item={items} key={i}/>))}</div>
              </div> }
           
        </div>
    </div>
    </>
  )
}

export default Cart