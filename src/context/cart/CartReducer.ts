import { MyContextProps } from './CartContext'
import { actionTypes } from './CartState'

const CartReducer = (state: MyContextProps, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id)

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        }

        if (updatedItem.quantity) {
          updatedItem.quantity++
        }
        updatedCart[updatedItemIndex] = updatedItem
      }

      return {
        ...state,
        cartItems: [...updatedCart],
        cartSize: state.cartSize++
      }
    }
    case actionTypes.REMOVE_ITEM: {
      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload)

      if (updatedCart[updatedItemIndex].quantity === 1) {
        updatedCart.splice(updatedItemIndex, 1)
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        }

        if (updatedItem.quantity) {
          updatedItem.quantity--
        }
        updatedCart[updatedItemIndex] = updatedItem
      }

      return {
        ...state,
        cartItems: [...updatedCart],
        cartSize: state.cartSize--
      }
    }

    default:
      return state
  }
}

export default CartReducer
