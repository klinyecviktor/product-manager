import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';
import reducers from './reducers';

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([ action.text ])
        default:
            return state
    }
}

console.log(typeof todos, todos !== 'function');


const store = createStore(todos);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);