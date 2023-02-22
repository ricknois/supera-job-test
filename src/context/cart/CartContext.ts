import { createContext } from 'react'

import { ProductType } from '../../global/interfaces/productsInterfaces'

export type MyContextProps = {
  cartSize: 0
  cartItems: ProductType[]
  addToCart: (item: ProductType) => void
  removeItem: (id: number) => void
}

const CartContext = createContext({} as MyContextProps)

export default CartContext
