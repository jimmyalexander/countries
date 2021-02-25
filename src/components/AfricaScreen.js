import React from 'react'
import { useFetch } from '../CustomHooks/useFetch';
import { FlagCard } from './FlagCard';

export const AfricaScreen = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/region/africa');

  return (
    <div>
      <div className='title_home'>
        <h1>AfricaScreen</h1>
      </div>


      <div className='container_card'>
        {
          data.map(africa => (
            <FlagCard key={ africa.name} {...africa} />
          ))
        }
      </div>
    </div>
  )
}
