import { Box, Card, CardActionArea, CardMedia, IconButton, Typography } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useContext } from 'react'

import { ProductType } from '../../global/interfaces/productsInterfaces'
import { theme } from '../../global/theme/theme'
import CartContext from '../../context/cart/CartContext'

export default function CartList({ image, name, price, id, score, quantity }: ProductType) {
  const { addToCart, removeItem } = useContext(CartContext)

  const handleAdd = () => {
    addToCart({ image, name, price, id, score, quantity })
  }

  const handleRemove = () => {
    removeItem(id)
  }

  return (
    <Card sx={{ background: 'transparent', flexDirection: 'row', display: 'flex', mb: 0.5 }}>
      <CardMedia
        alt="Live from space album cover"
        component="img"
        image={`/src/assets/${image}`}
        sx={{ width: 70, height: 100 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', ml: 0.3 }}>
        <Typography
          component="div"
          sx={{ fontWeight: 600, fontSize: 18, textAlign: 'center', color: theme.colors.white }}
        >
          {name}
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: 13,
            color: theme.colors.white
          }}
        >
          {`R$ ${price.toString().replace('.', ',')}`}
        </Typography>
        <Box
          sx={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }}
        >
          <IconButton color="primary" component="label" onClick={() => handleRemove()}>
            <Remove />
          </IconButton>
          <Typography
            component="div"
            sx={{
              fontSize: 13,
              color: theme.colors.white
            }}
          >
            {quantity}
          </Typography>
          <IconButton color="primary" component="label" onClick={() => handleAdd()}>
            <Add />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
