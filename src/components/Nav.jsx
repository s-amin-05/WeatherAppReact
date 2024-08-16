import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className='bg-gray-950 flex items-center justify-around text-white h-14 '>
        <Link to={"/"} >
          Logo
        </Link>
        <ul className='flex w-2/4 justify-center gap-10'>
          <li>
            <NavLink to={'/'} 
              className={({isActive})=>(
              `${isActive? `text-orange-500`: `text-zinc-50`}`
              )}>
              Home
            </NavLink>

          </li>
          <li>
          <NavLink to={'/Forecast'}>
              Forecast
          </NavLink>

          </li>
          <li>
          <NavLink to={'/News'}>
              News & Alerts
          </NavLink>

          </li>
            </ul>
        <Link>
            user settings
        </Link>
      </div>
    </>
  )
}

export default Nav
