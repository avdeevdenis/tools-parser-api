import { combineReducers } from 'redux';

// import { globalReducer } from './global/reducers';
// import { searchReducer } from './search/reducers';
import { sberLentaReducer } from './sbermarket/lenta';

export default combineReducers({
    sberLenta: sberLentaReducer,
    // global: globalReducer,
    // search: searchReducer,
    // alerts: alertsReducer,
});

