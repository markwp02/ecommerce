import 'bulma/css/bulma.css';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationProvider } from './context/navigation';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>);

