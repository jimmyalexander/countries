import React from 'react'
import { useFetch } from '../CustomHooks/useFetch';
import { FlagCard } from './FlagCard';

export const AmericaScreen = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/region/americas');

  return (
    <div>
      <div className='title_home'>
        <h1>AmericaScreen</h1>
      </div>

      <div className='container_card'>
        {
          data.map(ameri => (
            <FlagCard key={ ameri.name} {...ameri} />
          ))
        }
      </div>
    </div>
  )
}
