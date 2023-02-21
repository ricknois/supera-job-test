import { useReducer } from 'react'

import CartContext from './CartContext'
import CartReducer from './CartReducer'

export const SHOW_HIDE_CART = 'SHOW_HIDE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'

const CartState = ({ children }) => {
  const initalState = {
    cartSize: 0,
    cartItems: [
      // {
      //   id: 201,
      //   image: 'call-of-duty-infinite-warfare.png',
      //   name: 'Call Of Duty Infinite Warfare',
      //   price: 49.99,
      //   quantity: 4,
      //   score: 80
      // },
      // {
      //   id: 312,
      //   image: 'super-mario-odyssey.png',
      //   name: 'Super Mario Odyssey',
      //   price: 197.88,
      //   quantity: 1,
      //   score: 100
      // },
      // {
      //   id: 311,
      //   image: 'super-mario-odyssey.png',
      //   name: 'Super Mario Odyssey',
      //   price: 197.88,
      //   quantity: 1,
      //   score: 100
      // }
    ]
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
