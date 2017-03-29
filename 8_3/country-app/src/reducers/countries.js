import { DELETE_COUNTRY } from '../actions';
import countriesData from '../../data/countries.json';

const countriesReducer = function (state = countriesData, action) {
  switch (action.type) {
    case DELETE_COUNTRY:
      return state.filter(country => country.id !== action.id);
  }
  return state;
};

export const getCountry = (state, id) => {
  return state.find(country => country.id === id);
}
export const findCountriesBySearchText = (state, searchText) => state.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
export const filterCountriesByContinent = (state, continent) => state.filter(country => country.continent === continent);

export default countriesReducer;