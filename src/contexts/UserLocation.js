import React, { createContext, useContext } from "react";

export const LocationContext = createContext({

    latitude: null,
    longitude: null,
     
    getUserCoords: ()=> {},
    getCoordsFromPlace: (city)=> {}
    
})

export const LocationProvider = LocationContext.Provider

export default function useLocationContext(){
    return useContext(LocationContext)
}
