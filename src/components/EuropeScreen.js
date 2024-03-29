import React from 'react'
import { useFetch } from '../CustomHooks/useFetch';
import { FlagCard } from './FlagCard';

export const EuropeScreen = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/region/europe');

  return (
    <div className='container_world'>
      <div className='title_home'>
        <h1>EuropeScreen</h1>
      </div>


      <div className='container_card'>
        {
          data.map(euro => (
            <FlagCard key={ euro.name} {...euro} />
          ))
        }
      </div>
    </div>
  )
}
