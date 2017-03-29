import { connect } from 'react-redux';
import { getCountry } from '../reducers/countries';
import CountryDetails from '../components/CountryDetails';

const mapStateToProps = (store, ownProps) => ({
  country: getCountry(store.countries, ownProps.params.id)
});

export default connect(mapStateToProps)(CountryDetails);