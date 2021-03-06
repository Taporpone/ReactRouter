import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import getCountries from './reducers';

render(
    <Provider storage={store}>
        <div>
            <h1>hi</h1>
            <DevTools store={store} />
        </div>
    </Provider>
    , document.getElementById('root')
);

store.dispatch(getCountries());
