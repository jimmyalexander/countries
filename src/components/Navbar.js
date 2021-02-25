import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { mdiFormatLineWeight, mdiWindowClose} from '@mdi/js';
import Icon from './icons/iconos';
import { Principal } from './Principal';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleBurguer = () => {
    setActive(!active);
  }

  const handleExit = () => {
    setActive(false);
    
  }
  console.log(active)
  return (
    <div>
      <div className='container_navbar'>
        <div className='title_flag'>
          <Link  to='/'>
           <h1>FLAGS</h1>
          </Link>
        </div>
        <div onClick={ handleBurguer} className='container_icon-hamburguer'>
          <Icon icon={mdiFormatLineWeight} />
        </div>
        <nav className={ active  ? 'navbar is-active': 'navbar'}>
           <div  onClick={ handleExit } className='container_icon-exit'>
            <Icon id='icon' icon={mdiWindowClose} color={'white'}/>
           </div>
          <NavLink  to='/world' >World</NavLink>
          <NavLink  to='/africa'  >Africa</NavLink>
          <NavLink  to='/america'  >America</NavLink>
          <NavLink  to='/asia'  >Asia</NavLink>
          <NavLink  to='/europe'  >Europe</NavLink>
          <NavLink  to='/oceania'  >Oceania</NavLink>
        </nav>
      </div>
      <Principal />
    </div>
  )
}
