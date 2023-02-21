import { Box, Card, CardActionArea, CardActions, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { theme } from '../../global/theme/theme'
import { ProductType } from '../../global/interfaces/productsInterfaces'

export default function Product({ image, name, price, id, score }: ProductType) {
  const handleTitle = (title: string) => {
    if (title.length > 19) {
      return `${title.substring(0, 18)}...`
    }

    return title
  }
  const navigation = useNavigate()

  return (
    <CardActionArea
      sx={{ mr: 2, background: 'transparent', padding: 1, flex: 1 }}
      onClick={() => navigation(`/product/${id}`, { state: { image, name, price, id, score } })}
    >
      <CardMedia
        alt="Live from space album cover"
        component="img"
        image={`/src/assets/${image}`}
        sx={{ width: 156, height: 200 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', mt: 0.5 }}>
        <Typography
          component="div"
          sx={{ fontWeight: 600, fontSize: 13, textAlign: 'center', color: theme.colors.white }}
        >
          {handleTitle(name)}
        </Typography>
        <Typography
          component="div"
          sx={{
            fontSize: 11,
            position: 'absolute',
            bottom: 0,
            right: 22,
            color: theme.colors.white
          }}
        >
          {`R$ ${price.toString().replace('.', ',')}`}
        </Typography>
      </Box>
    </CardActionArea>
  )
}
