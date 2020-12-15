import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { handleSumTotal } from '../utils/handleSumTotal'

export const Payment = () => {
  const {state: { cart, buyer },  addNewOrder} = useContext(AppContext)
  const history = useHistory()
  const paypalOptions = {
    clientId: 'AS_ieGIkoTEAbQkimjQkflUcYX00WgeeotNPuvOqPoMyl68IJCqJHtbbu7FFrIaOkTv43qlvWDyw5h_0',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {

    if(data.status === "COMPLETED"){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => {return (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          </div>
        )})}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => {return console.log('Start Payment')}}
            onPaymentSuccess={data => {return handlePaymentSuccess(data)}}
            onPaymentError={error => {return console.log(error)}}
            onPaymentCancel={data => {return console.log(data)}}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

