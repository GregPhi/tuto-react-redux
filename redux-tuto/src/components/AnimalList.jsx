import React from 'react';
import {connect} from 'react-redux';
import {animalsSelector} from '../store/animalSelectors'
import {toggleAnimalAction} from '../store/animalActions'

function AnimalItem({animal, onToggle}){
  return <li>
    <label>
      <input type="checkbox" checked={animal.favorite} onChange={() => onToggle(animal)}/>
      {animal.name}
    </label>
  </li>
}

export function AnimalList({animals, onToggle}){
  return <ul>
    {animals.map(animal => <AnimalItem animal={animal} onToggle={onToggle} key={animal.animalId}/>)}
  </ul>
}

export const AnimalListStore = connect(
  (state) => ({animals: animalsSelector(state)}),
  (dispatch) => (
    { onToggle : animal => dispatch(toggleAnimalAction(animal))}
  )
)(AnimalList)
