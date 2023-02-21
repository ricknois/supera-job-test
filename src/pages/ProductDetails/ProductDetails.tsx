import { ProductType } from 'global/interfaces/productsInterfaces'
import { useLocation } from 'react-router-dom'
import { Alert, Box, Button, Card, CardMedia, Collapse, Grid, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material/'
import React, { useContext } from 'react'

import { Header } from '../../components/'
import { theme } from '../../global/theme/theme'
import CartContext from '../../context/cart/CartContext'

export type LocationParams = {
  pathname: string
  state: ProductType
  search: string
  hash: string
  key: string
}

export default function ProductDetails() {
  const { state } = useLocation() as LocationParams
  const [open, setOpen] = React.useState(false)
  const { addToCart } = useContext(CartContext)

  const handleCartButton = () => {
    setOpen(true)
    addToCart(state)
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginX: 2
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mt: 2,
            mb: 2,
            fontSize: 30,
            textAlign: 'center',
            color: theme.colors.white
          }}
        >
          {state.name}
        </Typography>
        <CardMedia
          alt="Live from space album cover"
          component="img"
          image={`/src/assets/${state.image}`}
          sx={{ width: 156, height: 200, mb: 2 }}
        />
        <Typography
          sx={{ fontWeight: 600, fontSize: 20, alignSelf: 'flex-start', color: theme.colors.white }}
        >
          Description
        </Typography>
        <Typography sx={{ fontSize: 14, textAlign: 'justify', color: theme.colors.subText }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum mollis lacinia.
          Maecenas ut quam eget orci eleifend vulputate. Ut non elit sem. Curabitur nec aliquam
          lacus. Aenean lacus nunc, lobortis non faucibus sit amet, tempor eu massa. Phasellus
          maximus sollicitudin nibh placerat sagittis. Praesent ut leo lectus. Mauris cursus
          hendrerit dapibus.
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 24,
            color: theme.colors.white,
            textAlign: 'right',
            width: '100%',
            flex: 1,
            mt: 2
          }}
        >
          {`R$ ${state.price.toString().replace('.', ',')}`}
        </Typography>
        <Button
          color="success"
          startIcon={<ShoppingCartOutlined />}
          sx={{
            fontWeight: 600,
            fontSize: 16,
            position: 'fixed',
            width: '100%',
            bottom: 0
          }}
          variant="contained"
          onClick={() => handleCartButton()}
        >
          Add to cart
        </Button>
      </Box>
      <Collapse in={open} sx={{ position: 'fixed', width: '100%', mt: 7 }}>
        <Alert color="info" severity="success">
          Product added to cart
        </Alert>
      </Collapse>
    </Box>
  )
}
