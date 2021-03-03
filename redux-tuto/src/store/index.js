import { createStore } from 'redux'
import {  animalsRedecuer } from './animalRedecuer'

const store = createStore(
  animalsRedecuer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // store redux
/**
onglet redux :
gauche -> les actions effectuées (nom clair)
droite ->
Action :
State : état du store
Diff : ce qu'a fait l'action

store.subscribe(() => console.log(store.getState())) // permettre écout lors changement sur le store -> fonction qui effectue une action lors d'un changement
store.dispatch({type:ADD_ANIMAL_ACTION, payload: {name:"Tiber"}}) // envoi une action (ici ADD)
store.dispatch({type:ADD_ANIMAL_ACTION, payload: {name:"Snake"}})

**/
