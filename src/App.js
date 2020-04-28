import React, { useState, useEffect } from "react";
import axios from 'axios';
import Select from './components/Select';
import CardCountry from './components/CardCountry';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [information, setInformation] = useState([]);

  //getAPI
  const getAPI = () => {
    axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(res => { setAllCountries(res.data); })
  }

  // load datas - Mimic ComponentDidMount
  useEffect(() => {
      getAPI()
        }, [])

  // create array countries - Minmic DidUpdate      
  useEffect(() => {
    setCountries(allCountries.map(el => el.name))
         }, [allCountries]);

  //Change country
  const handleSelectChange = (e) => {
    setCountry(e.target.value);
             }       
    
 // Find Information one country - Minmic DidUpdate
  useEffect(() => {
     setInformation (allCountries.filter(el => el.name === country))
   }, [country]);

console.log(information)

    return (
      <div> 
        <h1>Please, select a country</h1>
        <Select 
       options = {countries} 
       value = {country}
       handleChange = {handleSelectChange}
       />  
        {information.length>0 &&
        <CardCountry 
              name= {information[0].name}
              flag = {information[0].flag}
              capital ={information[0].capital}
              timezones ={information[0].timezones}
              region ={information[0].region}
              subregion ={information[0].subregion}
              population ={information[0].population}
      /> 
        }
       </div>
    
    )
}
  
export default App;

