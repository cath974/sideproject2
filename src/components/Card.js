import React from 'react';


const Card = ({name,flag,timezones,region,subregion,population}) => (
 <section>
      <img src={flag} alt={name} />
      <p>Local Hour: {timezones}</p>
      <p>Region: {region}</p>
      <p>Sub Region: {subregion}</p>
      <p>Population: {population}</p>

 </section>
  )


export default Card;
