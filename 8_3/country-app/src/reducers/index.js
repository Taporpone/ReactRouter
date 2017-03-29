import { combineReducers } from 'redux';
import countries from './countries';
import selectedContinent from './selectedContinent';

const reducers = combineReducers({
    countries,
    selectedContinent
});

export default reducers;