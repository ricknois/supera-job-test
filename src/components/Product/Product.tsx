import { Card, CardMedia, Typography } from '@mui/material'

import { ProductType } from '../../global/interfaces/productsInterfaces'

export default function Product({ image, name }: ProductType) {
  return (
    <Card sx={{}}>
      <CardMedia
        alt="Live from space album cover"
        component="img"
        image={`/src/assets/${image}`}
        sx={{ width: 151 }}
      />
      <Typography component="div" variant="h5">
        {name}
      </Typography>
    </Card>
  )
}
