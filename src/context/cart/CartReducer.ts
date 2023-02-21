export const SHOW_HIDE_CART = 'SHOW_HIDE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload.id)

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        }

        updatedItem.quantity++
        updatedCart[updatedItemIndex] = updatedItem
      }

      return {
        ...state,
        cartItems: [...updatedCart],
        cartSize: state.cartSize++
      }
    }
    case REMOVE_ITEM: {
      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((item) => item.id === action.payload)

      if (updatedCart[updatedItemIndex].quantity === 1) {
        updatedCart.splice(updatedItemIndex, 1)
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        }

        updatedItem.quantity--
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
