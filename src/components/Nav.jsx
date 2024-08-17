import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//Imported svgs as React Components so that color can be changed during runtime
import {ReactComponent as WeatherIcon} from '../assets/weather.svg'
import {ReactComponent as UserIcon} from '../assets/user_settings.svg'

const appName = "Weather App"
const [coords, setCoords] = useState([])

function Nav() {
  return (
    <>
      <div className={`bg-navColor flex items-center justify-around text-white h-14 border-b-[1px] border-gray-500`} 
      >
        <Link to={"/"} className='text-contrastColor'>
          <WeatherIcon/>
        </Link>
        <h1 className='text-xl'>
          {appName}
        </h1>
        <Link className='text-white'>
            <UserIcon />
        </Link>
      </div>
      
      <div className=
      {`bg-navColor flex items-center justify-around text-white h-14 font-medium` }
      >
        
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
        
      </div>
    </>
  )
}

export default Nav
