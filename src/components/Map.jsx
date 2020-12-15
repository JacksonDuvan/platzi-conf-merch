import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const Map = ({ location }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: location.lat,
        lng: location.lng
    }

    return (
      <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
        <GoogleMap
                // MapStyle={mapStyles}s
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    )
}