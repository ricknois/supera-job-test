import { useEffect, useState } from 'react'
import { ProductType } from 'global/interfaces/productsInterfaces'

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

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((item, index) => (
        <Product
          key={index}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          score={item.score}
        />
      ))}
    </div>
  )
}
