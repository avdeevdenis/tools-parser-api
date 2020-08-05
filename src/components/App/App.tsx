import React from 'react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../store/reducers';

import { SberLentaPage } from '../../pages/sbermarket/lenta/page';

import './App.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <SberLentaPage />
            </div>
        </Provider>
    );
};

export default App;
