import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions';
import { filterCountriesByContinent } from '../reducers/countries';
import Continents from '../components/Continents';

const mapStateToProps = store => ({
  countries: filterCountriesByContinent(store.countries, store.selectedContinent)
});

const mapDispatchToProps = dispatch => ({
  deleteCountry: (id) => dispatch(deleteCountry(id)),
  setContinent: (name) => dispatch(setContinent(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Continents);