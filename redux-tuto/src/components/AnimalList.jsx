import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {connect} from 'react-redux';
import {animalsSelector} from '../store/animalSelectors'
import {toggleAnimalAction, deleteAnimalAction} from '../store/animalActions'

function AnimalItem({animal, onToggle, onDelete}){
  return <li>
    <label>
      <input type="checkbox" checked={animal.favorite} onChange={() => onToggle(animal)}/>
      {animal.name}
      <button onClick={ () => onDelete(animal)}>X</button>
    </label>
  </li>
}

export function AnimalList({animals, onToggle, onDelete, onAdd}){
  return <ul>
    {animals.map(animal => <AnimalItem animal={animal} onToggle={onToggle} onDelete={onDelete} key={animal.animalId}/>)}
  </ul>
}

// use Hooks

export function AnimalListStore(){
  const animals = useSelector(animalsSelector)
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const onToggle = useCallback( animal => {dispatch(toggleAnimalAction(animal))}, [])
  // eslint-disable-next-line
  const onDelete = useCallback( animal => {dispatch(deleteAnimalAction(animal))}, [])
  return <AnimalList animals={animals} onToggle={onToggle} onDelete={onDelete} />
}

/**
export const AnimalListStore = connect(
  (state) => ({animals: animalsSelector(state)}),
  (dispatch) => (
    { onToggle : animal => dispatch(toggleAnimalAction(animal))}
  )
)(AnimalList)
**/
