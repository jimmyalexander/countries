import React from 'react'
import { Link } from 'react-router-dom';

export const FlagCard = ({
  name,
  flag,
  capital,
  region,
  population
}) => {

 

  return (
       <div className='container_home' key={name}>
                <div className='home'>
                  <figure className='container_img'>
                    <img src={flag} alt={name}/>
                  </figure>
                  <div className='container_home-data'>
                    <p><strong>Name: </strong>{name}</p>
                    <p><strong>Capital: </strong>{capital}</p>
                    <p><strong>Region: </strong>{region}</p>
                    <p><strong>Population: </strong>{population}</p>
                    <Link to={`/countries/flag/${name}`} >Ver Mas..</Link>
                  </div>
                </div>
              </div>
  )
}
