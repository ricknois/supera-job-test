import { ReactNode, Reducer, useReducer } from 'react'
import { ProductType } from 'global/interfaces/productsInterfaces'

import CartContext, { MyContextProps } from './CartContext'
import CartReducer from './CartReducer'

export enum actionTypes {
  ADD_TO_CART,
  REMOVE_ITEM
}

type MyProviderProps = {
  children: ReactNode
}

const CartState = ({ children }: MyProviderProps) => {
  const initalState: MyContextProps = {
    cartSize: 0,
    cartItems: [],
    addToCart: () => null,
    removeItem: () => null
  }

  const [state, dispatch] = useReducer<Reducer<any, any>>(CartReducer, initalState)

  const addToCart = (item: ProductType) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item })
  }

  const removeItem = (id: number) => {
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: id })
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
