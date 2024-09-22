// import React, {useState, useEffect, useCallback} from 'react'
// import UseCurrentLocation from '../hooks/UseCurrentLocation';

// function Test({
//     lat = 19.4326, 
//     lon = 72.8397,
//     currentLocationInfo = {},
//     getLocation = ()=>{},
// }) {
//     const [lat, setLat] =  useState(0);
//     const [lon, setLon] = useState(0);

//     //Get user location function
//     const getLocation = useCallback(() => {
        
//         if(navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(handleCoords, noCoords);
//         }
//         else{
//             console.log("Geolocation is not supported by this browser.");
//         }
//     }, [lat, lon]);

//     // Get location from user
//     useEffect(() => {
//         getLocation();
//     }, [lat, lon, getLocation]);

//     const handleCoords = (position) => {
//         setLat(position.coords.latitude);
//         setLon(position.coords.longitude);
//     };

//     const noCoords = (error) => {
//         setLat(19.4326);
//         setLon(72.8397);
//         console.error(error);
//     };

//     const currentLocationInfo = UseCurrentLocation(lat, lon);
//     console.log(currentLocationInfo)

//     return (
//         <div>
            
            
//         </div>
//     );
// }

// export default Test;