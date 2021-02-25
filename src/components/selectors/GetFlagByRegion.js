import React from 'react'
import { useFetch } from '../../CustomHooks/useFetch';

export const GetFlagByRegion = () => {
  const { data } = useFetch('https://restcountries.eu/rest/v2/all');

console.log(data)
}
