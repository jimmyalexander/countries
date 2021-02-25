import { useFetch } from "../../CustomHooks/useFetch";



export const GetFlagByName = (name) => {

  const { data } = useFetch('https://restcountries.eu/rest/v2/all');
  
  return data.find(hero => hero.name === name ? hero.name : '')

}