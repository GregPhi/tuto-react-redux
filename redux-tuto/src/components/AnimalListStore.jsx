import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import {connect} from 'react-redux';
import {animalsSelector} from '../store/animalSelectors'
import {toggleAnimalAction, deleteAnimalAction} from '../store/animalActions'
import AnimalList from '../generics/AnimalList'

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
