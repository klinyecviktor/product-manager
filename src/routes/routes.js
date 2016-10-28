import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
    App,
    Main,
    Test
} from '../components';

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {Main}/>
        <Route path = "*" component = {Test} />
    </Route>
);