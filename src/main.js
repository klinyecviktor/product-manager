import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducers);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);