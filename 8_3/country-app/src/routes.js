import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './components/Navigation';

import Contact from './components/Conact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CountryFlagContainer from './containers/FlagContainer';
import CountryDetailsContainer from './containers/CountryContainer';
import ContinentsContainer from './containers/ContinentsContainer';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer} />
            <Route path='country/:id' component={CountryDetailsContainer} />
        </Route>
        <Route path='continents' component={ContinentsContainer} />
        <Route path='contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>

)