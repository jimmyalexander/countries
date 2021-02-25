import React, { useContext, useState } from 'react';
import { UserContext } from '../containers/UserContext';

export const Search = () => {

  const { setSearch, detallado} = useContext( UserContext );
  const [memorySearch, setMemorySearch] = useState('');

  

  const handleChange = (e) => {
    e.preventDefault();
    setMemorySearch(
      e.target.value
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(memorySearch === ''){
      alert('digite un valor')
    }   
    else{
      setSearch(
        `name/${memorySearch}`
      )
    }
  }
  const selectChange = (e) => {
    setSearch(
      `region/${e.target.value}`
    )
  }

  return (
    <div className={ detallado.name !== '' ? 'none' : 'container_form'}>
      <form className='form' onSubmit={handleSubmit} >
        <input  onChange={handleChange}  className='search_input' type='search'  placeholder='Search for a country...'/>
        <select onChange={selectChange} className='search_filter' name='select'>
          <option  hidden >Filter by Region</option>
          <option value='africa' >Africa</option>
          <option value='americas' >America</option>
          <option value='asia' >Asia</option>
          <option value='europe' >Europe</option>
          <option value='oceania' >Oceania</option>
        </select>
      </form>
    </div>
  )
}
