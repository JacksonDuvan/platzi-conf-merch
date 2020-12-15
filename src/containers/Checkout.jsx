import React, { useContext, useMemo } from 'react'
import '../styles/components/Checkout.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { handleSumTotal } from '../utils/handleSumTotal'

export const Checkout = () => {

    const { state: { cart }, removeFromCart } = useContext(AppContext)

    const handleRemove = (product) => {
      removeFromCart(product)
    }

    // const handleSumTotal = useMemo(() => {
    //   const reducer = (accumulator, currentValue) => {return accumulator + currentValue.price}
    //   const sum = cart.reduce(reducer, 0)

    //   return sum
    // }, [cart])

    // const handleSumTotal = () => {
    //   const reducer = (accumulator, currentValue) => {return accumulator + currentValue.price}
    //   const sum = cart.reduce(reducer, 0)

    //   return sum
    // }

    return (
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3> }
          {cart.map(item => {return (
            <div className="Checkout-item" key={item.title}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>
                  $
                  {item.price}
                </span>
              </div>
              <button type="button" onClick={() => {return handleRemove(item)}}><i className="fas fa-trash-alt" /></button>
            </div>
          )})}
  
        </div>
        {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
        )}
      </div>
  )
}
