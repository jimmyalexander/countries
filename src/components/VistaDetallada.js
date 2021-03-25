import React, { useContext } from 'react'
import { UserContext } from '../containers/UserContext'
import { useFetch } from '../CustomHooks/useFetch';

export const VistaDetallada = () => {
 
  const { detallado, setDetallado, setSearch}  = useContext(UserContext);
  
  const handleClick = (e) => {
    setSearch('');
    setDetallado(
      {
        name:'',
        population: 0,
        region:'',
        subRegion:'',
        capital:'',
        topLevelDomain:'',
        currencies:'',
        languages:'',
        url: '',
        borders: []
      }
    )

  } 
  return (
    <div className={ detallado.name !== '' ? ' ' : 'none'}>
      <div className='country'>
          <button onClick={handleClick}>Back</button>
          <figure className='country_container-img'>
            <img src={ detallado.name !== '' ? detallado.url :''   } alt='bandera'/>
          </figure>
        <div className='country_container-data'>
          <h2 >{detallado.name !== ''? detallado.name : ''}</h2>

          <div>
            <p><strong>Native Name:</strong> {detallado.name !== ''? detallado.name: ''}</p>
            <p><strong>Population:</strong> {detallado.name !== ''? detallado.population: ''}</p>
            <p><strong>Region: </strong> {detallado.name !== ''? detallado.region : ''}</p>
            <p><strong>Sub Region: </strong> {detallado.name !== ''? detallado.subRegion : ''}</p>
            <p><strong>Top Level Domain:</strong>  { detallado.name !== ''? detallado.topLevelDomain: ''}</p> 
            <p><strong>Currencies:</strong>  { detallado.name !== ''? detallado.currencies: ''}</p> 
            <p><strong>Languages:</strong>  { detallado.name !== ''? detallado.languages: ''}</p> 
          </div>

          <div className='borders'>
            <p><strong>Border Countries:</strong></p>
            {
              detallado.name !== ''? detallado.borders.map( (pais, index) => {
                return <button key={pais} >{pais}</button>
              })
              : ''
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}
