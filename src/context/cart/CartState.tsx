import { useReducer } from 'react'

import CartContext from './CartContext'
import CartReducer from './CartReducer'

export const SHOW_HIDE_CART = 'SHOW_HIDE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'

const CartState = ({ children }) => {
  const initalState = {
    cartSize: 0,
    cartItems: []
  }

  const [state, dispatch] = useReducer(CartReducer, initalState)

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  return (
    <CartContext.Provider
      value={{
        cartSize: state.cartSize,
        cartItems: state.cartItems,
        addToCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartState
