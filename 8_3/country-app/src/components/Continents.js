import React, { Component } from 'react';
import CountryFlagList from './FlagList';

const Continents = ({countries, setContinent, deleteCountry}) => {
  return (
    <div>
      <select onChange={event => setContinent(event.target.value)}>
        <option value="Europa">Europe</option>
        <option value="Afryka">Africa</option>
      </select>
      <CountryFlagList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
};

export default Continents;
