import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { mdiFormatLineWeight, mdiWindowClose} from '@mdi/js';
import Icon from './icons/iconos';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const loca = useLocation();
  const handleBurguer = () => {
    setActive(!active);
  }

  const handleExit = () => {
    setActive(false);
    
  }
  return (
    
    <div>
      <div className={loca.pathname? 'container_navbar' : 'desaparece'}>
        <div className='title_flag'>
          <Link  to='/countries'>
           <h1>FLAGS</h1>
          </Link>
        </div>
        <div onClick={ handleBurguer} className='container_icon-hamburguer'>
          <Icon icon={mdiFormatLineWeight} color={'white'} />
        </div>
        <nav className={ active  ? 'navbar is-active': 'navbar'}>
           <div  onClick={ handleExit } className='container_icon-exit'>
            <Icon id='icon' icon={mdiWindowClose} color={'white'}/>
           </div>
          <Link  to='/countries/world' >World</Link>
          <Link  to='/countries/africa'  >Africa</Link>
          <Link  to='/countries/america'  >America</Link>
          <Link  to='/countries/asia'  >Asia</Link>
          <Link  to='/countries/europe'  >Europe</Link>
          <Link  to='/countries/oceania'  >Oceania</Link>
        </nav>
      </div>
    </div>
  )
}
