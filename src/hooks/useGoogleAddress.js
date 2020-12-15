import {useState, useEffect} from 'react'
import axios from 'axios'

export const useGoogleAddress = address => {
    const [map, setMap] = useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`

    const getLocation = async () => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location)
    }
    useEffect(() => {
       getLocation()
    }, [])

    return map
}
