import React from 'react'
import { useFetch } from '../CustomHooks/useFetch'
import { FlagCard } from './FlagCard';

export const Home = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/all');

  return (
    <div >

      <div className='title_home'>
        <h1>World</h1>
      </div>
      
      <div className='container_card' >
        {
          data.map(flag => (
             <FlagCard  key={ flag.name } {...flag}/>
          ))
        }
      </div>
    </div>
  )
}
