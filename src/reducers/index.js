import { combineReducers } from 'redux';

import mainReducer from './main';

const rootReducer = combineReducers({
    pokemons: mainReducer
});

export default rootReducer;