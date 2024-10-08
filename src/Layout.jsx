import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import { LocationProvider } from "./contexts/UserLocation"
import { useState, useEffect} from "react"


function Layout() {

  const BASE_URL = "https://api.weatherapi.com/v1"
  
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [data, setData] = useState({})
  

  const getUserCoords = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      (position)=> {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        
      },
      (error)=> {
        setLatitude(19)
        setLongitude(72)
        console.log(error)
      });
    }
  }

  const getCoordsFromPlace = async (city) => {

    //Handling city name
    if(city != ""){
      const formattedArray = Array.from(city).map(value => value.toLowerCase())
      formattedArray[0] = city[0].toUpperCase()
      const formattedCity = formattedArray.join("")
      const locationURL = `${BASE_URL}/current.json?key=${import.meta.env.VITE_API_KEY}&q=${formattedCity}`


      try {
        const response = await fetch(locationURL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
  
        if (data && data.location) {
          setLatitude(data.location.lat);
          setLongitude(data.location.lon);
        }
      } catch (error) {
          console.error(error);
      }
      
    }
    
  }

  useEffect(() => {
    if (latitude !== null) {
      console.log(latitude);
    }
  }, [latitude]);

  return (
    <LocationProvider value={{latitude, longitude, getUserCoords,  getCoordsFromPlace}}>
      <Nav />
      <Outlet />
    </LocationProvider>
  )
}

export default Layout
