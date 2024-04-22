import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import applicationReducer from './slices/appSlice';
import './index.css';
import Breakify from './containers/breakify';
import {Provider} from "react-redux";

// The thunk middleware was automatically added

const store = configureStore({
    reducer : {
        application: applicationReducer,
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Breakify/>
    </Provider>
);
