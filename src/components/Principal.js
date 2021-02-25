import React from 'react';
import { useLocation } from 'react-router-dom';
import asia1 from '../assets/static/asia1.jpg';
import asia2 from '../assets/static/asia2.jpg';
import asia3 from '../assets/static/asia3.jpg';

export const Principal = () => {
 const l = useLocation()
 if( l.pathname !== '/'){
   console.log('cambio')
 }
  return (
    <div className={ l.pathname !== '/' && l.pathname !== '/countries'  ? 'desaparece': 'container_principal'}>
      <div className='container_title'>
        <h1>Home</h1>
      </div>

      <div className='container_slider'>
        <div className='slider'>
          <div className='container_asia1'>
          <figure>
            <img src={asia1}  alt='img'/>
          </figure>
          <h2 className='title_region'>Asía</h2>
          </div>

          <div className='container_asia1'>
          <figure>
            <img src={asia2}  alt='img'/>
          </figure>
          <h2 className='title_region'>Asía</h2>
          </div>

          <div className='container_asia1'>
          <figure>
            <img src={asia3}  alt='img'/>
          </figure>
          <h2 className='title_region'>Asía</h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}
