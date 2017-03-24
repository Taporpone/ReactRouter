import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentional/navigation.component';

import Home from './presentional/home.component';
import NotFound from './presentional/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-details.component';
import ContinentsContainer from './containers/continents-container.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer} />
            <Route path='country/:id' component={CountryDetailsContainer} />
        </Route>
        <Route path='continents' component={ContinentsContainer} />
        <Route path='*' component={NotFound} />
    </Route>

)