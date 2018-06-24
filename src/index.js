import React from 'react';
import ReactDOM from 'react-dom'

// I add these three:
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

// import App from './App'
import { WrapperApp } from './App'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp />
    </Provider>,
    document.getElementById('root')
);
