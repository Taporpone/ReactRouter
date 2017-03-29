import {createStore} from 'redux';
import reducers from '../reducers';
import DevTools from '../DevTools';

const store = createStore(reducers,DevTools.instrument());

export default store;