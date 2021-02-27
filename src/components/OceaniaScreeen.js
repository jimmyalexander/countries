import React from 'react'
import { useFetch } from '../CustomHooks/useFetch';
import { FlagCard } from './FlagCard'

export const OceaniaScreeen = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/region/asia');

  return (
    <div className='container_world'>
      <div>
       <h1>OceaniaScreen</h1>

       <div className='container_card'>
        {
          data.map(asia => (
            <FlagCard key={ asia.name} {...asia} />
          ))
        }
      </div>
      </div>
    </div>
  )
}
