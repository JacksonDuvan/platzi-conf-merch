import React, { useContext } from 'react';
import '../styles/components/Success.css';
import { AppContext } from '../context/AppContext'
import { Map } from '../components/Map'
import {useGoogleAddress} from '../hooks/useGoogleAddress'

export const Success = () => {

  const { state: { buyer } } = useContext(AppContext)
  const location = useGoogleAddress(buyer[0].address)
  // console.log(location)
  console.log(buyer[0].address)
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map"><Map location={location} /></div>
      </div>
    </div>
  );
};

