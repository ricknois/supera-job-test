import { useContext } from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'

import CartContext from '../../context/cart/CartContext'
import { CartList, Header } from '../../components'
import { theme } from '../../global/theme/theme'

export default function Cart() {
  const { cartItems } = useContext(CartContext)

  const emptyCart = () => (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        mt: 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        sx={{
          color: theme.colors.white,
          fontSize: 20,
          fontWeight: 600
        }}
      >
        Cart Empty!
      </Typography>
    </Box>
  )

  const filledCart = () => {
    return (
      <ImageList
        cols={1}
        sx={{
          mt: 0.5,
          flexDirection: 'row',
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {cartItems.map((item) => (
          <ImageListItem key={item.id}>
            <CartList
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              score={item.score}
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }

  return (
    <div>
      <Header />
      {cartItems.length === 0 ? emptyCart() : filledCart()}
    </div>
  )
}
