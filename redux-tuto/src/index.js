console.log("Tutorial redux");

let animalId = 2
const animals = [
  {
    animalId: 1,
    name: "Tiger",
    favorite: false
  },
  {
    animalId: 2,
    name: "Panda",
    favorite: false
  }
]

const ADD_ANIMAL_ACTION = "ADD_ANIMAL_ACTION"
const UPDATE_ANIMAL_ACTION = "UPDATE_ANIMAL_ACTION"
const DELETE_ANIMAL_ACTION = "DELETE_ANIMAL_ACTION"

function animalsRedecuer(state = animals, action) {
  switch (action.type) {
    case ADD_ANIMAL_ACTION:
      return [...state, {animalId: ++animalId, ...action.payload , favorite:false}]
    case UPDATE_ANIMAL_ACTION:
      break;
    case DELETE_ANIMAL_ACTION:
      break;
    default:
      return state
  }
}

const firstAnimal = animalsRedecuer(undefined, {})
const newAnimal = animalsRedecuer(animals, {type:ADD_ANIMAL_ACTION, payload: {name:"Tiber"}})
console.log(firstAnimal, newAnimal);

/**
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
**/
