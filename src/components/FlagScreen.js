import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Loading } from './Loading';
import { GetFlagByName } from './selectors/GetFlagByname'

export const FlagScreen = () => {
  const { flagName } = useParams()
  
   const flag = GetFlagByName(flagName);
   
  return (
    <div className='container_flag-screen container_world'>
      <Link to='/countries' className='button_back' >Back</Link>

         {
           flag === undefined ? <Loading />:
            <div className='container_screen'  >
                  <div className='screen'>
                    <figure className='screen_img'>
                      <img src={flag === undefined ? '' : flag.flag} alt={ flag === undefined ? '' : flag.name}/>
                    </figure>
                    <div className='screen_data-uno'>
                      <h1>{flag === undefined ? '' : flag.name}</h1>
                      <p><strong>Native Name: </strong>{flag === undefined ? '' : flag.name}</p>
                      <p><strong>Population: </strong>{flag === undefined ? '' : flag.population}</p>
                      <p><strong>Region: </strong>{flag === undefined ? '' : flag.region}</p>
                      <p><strong>Sub Region: </strong>{flag === undefined ? '' : flag.subregion}</p>
                      <p><strong>Capital: </strong>{flag === undefined ? '' : flag.capital}</p>
                    </div>
                    <div  className='screen_data-dos'>
                      <p><strong>Top Level Domain: </strong>{flag === undefined ? '' : flag.domain}</p>
                      <p><strong>Currencies: </strong>{flag === undefined ? '' : flag.currencies[0].name}</p>
                      <p><strong>Languages: </strong>{flag === undefined ? '' : flag.languages.map(l => ', '+l.name)}</p>
                    </div>
                    <div className='screen_data-tres'>
                      <h2>Border Countries</h2>
                      <div>
                        <p>{flag === undefined ? '' : flag.borders.map((bor, i) => <li key={i} >{'     '+ bor}</li>)}</p>
                      </div>
                    </div>
                  </div>
              </div>
         }
    </div>
  )
}
