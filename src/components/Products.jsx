import React, { useContext } from 'react'
import { Product } from './Product'
import { AppContext } from '../context/AppContext'
import '../styles/components/Products.css'

export const Products = () => {
    const { state: { products }, addToCart } = useContext(AppContext)


    const handleAddToCart = product => {
      addToCart(product)
    }
    return (
      <div className="Products">
        <div className="Products-items">
          {
              products.map(product => {
                    return (
                      <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                )})
            }
        </div>
      </div>
    )
}