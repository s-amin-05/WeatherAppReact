import React, { useContext, useEffect, useRef, useState } from 'react'
import useLocationContext, { LocationContext } from '../contexts/UserLocation'
import { Link, NavLink } from 'react-router-dom'
//Imported svgs as React Components so that color can be changed during runtime
import {ReactComponent as WeatherIcon} from '../assets/weather.svg'
import {ReactComponent as UserIcon} from '../assets/user_settings.svg'


function Nav() {
  //Get user coords

  const {latitude, longitude, getUserCoords, getCoordsFromPlace} = useLocationContext()
  const inputRef = useRef(null)


  const appName = "Weather App"

  const handleBlur = (e) => {
    e.preventDefault()
    getCoordsFromPlace(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    getUserCoords()
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      inputRef.current.blur()
    }
  }

  return (
    <div >
      <div className={`bg-navColor flex items-center justify-around text-white h-14 border-b-[1px] border-gray-500`} 
      >
        
        <h1 className='text-xl'>
          {appName}
        </h1>

        <ul className='flex w-2/4 justify-center gap-20'>
        
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-contrastColor`: `text-white`}`
              )}>
              Home
            </NavLink>
          </li>

          <li> 
          <NavLink to={'/Forecast'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}>
              Forecast
          </NavLink>
          </li>

          <li>
          <NavLink to={'/News'}
          className={({isActive})=>(
            `${isActive? `text-contrastColor`: `text-white`}`
            )}>
              News & Alerts
          </NavLink>
          </li>

        </ul>

        <Link className='text-white'>
            <UserIcon />
        </Link>
      </div>
      
      <div className=
      {`bg-navColor flex items-center justify-center h-14 font-medium gap-4` }
      >
        <input type="text" id="" placeholder='Search' className='pl-4'
        onBlur={handleBlur} onKeyDown={handleKeyDown} ref={inputRef}
        />
        <button
        className='bg-white px-1'
        onClick={handleClick}
        >Current Location</button>
        
      </div>
    </div>
  )
}


export default Nav
