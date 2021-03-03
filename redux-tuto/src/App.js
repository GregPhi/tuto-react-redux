import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {AnimalListStore} from './components/AnimalList';

function App() {
  return (
    <Provider store={store}>
      <AnimalListStore />
    </Provider>
  );
}

export default App;
