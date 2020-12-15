import React, { useContext } from 'react';
import { Helmet } from 'react-helmet'
import { AppContext } from '../context/AppContext'
import { Map } from '../components/Map'
import {useGoogleAddress} from '../hooks/useGoogleAddress'
import '../styles/components/Success.css';

export const Success = () => {

  const { state: { buyer } } = useContext(AppContext)
  const location = useGoogleAddress(buyer[0].address)
  
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Success </title>
      </Helmet>
      <div className="Succes">
        <div className="Success-content">
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu dirección:</span>
          <div className="Success-map"><Map location={location} /></div>
        </div>
      </div>
    </>
  );
};

