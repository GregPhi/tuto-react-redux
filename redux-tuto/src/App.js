import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import {AnimalListStore} from './components/AnimalListStore';
import {AddAnimalForm} from './components/AddAnimal'

function App() {
  return (
    <Provider store={store}>
      <AnimalListStore />
      <AddAnimalForm />
    </Provider>
  );
}

export default App;
