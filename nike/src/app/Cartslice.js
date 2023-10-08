import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState={
    cartState:false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [], //suppose database
};
const CartSlice= createSlice({
    initialState,
    name:'cart',
    reducers:{
        setOpenCart:(state,action)=>{
            state.cartState=action.payload.cartState
        },
        setCloseCart: (state,action)=>{
            state.cartState=action.payload.cartState
        },
        setAddItemToCart: (state, action)=>{
            const itemIndex= state.cartItems.findIndex((item)=>item.id===action.payload.id)
            if (itemIndex>=0){
              state.cartItems[itemIndex].cartQty+=1 
              toast.success('item QTY increased')
            }else{
                const temp={...action.payload, cartQty:1}
            state.cartItems.push(temp) 
            toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        }
    }

})
export const {setOpenCart, setCloseCart,setAddItemToCart}=CartSlice.actions;
export const selectCartState=(state)=> state.cart.cartState;
export const selectCartItem=(state)=> state.cart.cartItems;
export default CartSlice.reducer