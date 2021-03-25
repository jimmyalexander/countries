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
    
    <div className={
      loca.pathname === '/countries/' 
                      || loca.pathname === '/countries/africa' 
                      || loca.pathname === '/countries/world' 
                      || loca.pathname === '/countries/america'  
                      || loca.pathname === '/countries/asia'
                      || loca.pathname === '/countries/europe' 
                      || loca.pathname === '/countries/oceania'  ? 'component_navbar ' : 'desaparece'
    }>
      <div className='container_navbar '>
        <div className='title_flag '>
          <Link onClick={ handleExit }  to='/countries/'>
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

          <Link  onClick={ handleExit }   to='/countries/world' >World</Link>
          <Link  onClick={ handleExit }  to='/countries/africa'  >Africa</Link>
          <Link  onClick={ handleExit }  to='/countries/america'  >America</Link>
          <Link  onClick={ handleExit }  to='/countries/asia'  >Asia</Link>
          <Link  onClick={ handleExit }  to='/countries/europe'  >Europe</Link>
          <Link  onClick={ handleExit }  to='/countries/oceania'  >Oceania</Link>
        </nav>
      </div>
    </div>
  )
}
