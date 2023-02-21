import { useEffect, useState } from 'react'
import { ProductType } from 'global/interfaces/productsInterfaces'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'

import { theme } from '../../global/theme/theme'
import Product from '../Product/Product'

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([])

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleTitle = (title: string) => (
    <Typography
      component="div"
      sx={{
        fontSize: 20,
        color: theme.colors.white,
        fontWeight: 600,
        mt: 2
      }}
    >
      {title}
    </Typography>
  )

  const handleList = (orderType?: string) => {
    const teste = [...products]
    const initialProducts = teste

    if (orderType === 'lowerPrice') {
      initialProducts.sort((a, b) => a.price - b.price)
    } else if (orderType === 'higherRating') {
      initialProducts.sort((a, b) => b.score - a.score)
    }

    return (
      <ImageList
        cols={1}
        rowHeight={255}
        sx={{
          display: 'flex',
          mt: 0.5,
          overflowY: 'hidden',
          flexDirection: 'row',
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {initialProducts.map((item, index) => (
          <ImageListItem key={index}>
            <Product
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              score={item.score}
            />
          </ImageListItem>
        ))}
      </ImageList>
    )
  }

  return (
    <Box sx={{ ml: 2 }}>
      {handleTitle('Games on Sale')}
      {handleList()}
      {handleTitle('Low prices')}
      {handleList('lowerPrice')}
      {handleTitle('Most Acclaim')}
      {handleList('higherRating')}
    </Box>
  )
}
