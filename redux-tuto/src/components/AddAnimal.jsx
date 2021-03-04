import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addAnimalAction} from '../store/animalActions'
import NewAnimalForm from '../generics/NewAnimalForm'

export function AddAnimalForm (){
  const dispatch = useDispatch()
  // eslint-disable-next-line
  const handleSubmit = useCallback( animal => {dispatch(addAnimalAction(animal.name))}, [])
  return <NewAnimalForm onAdd={handleSubmit} />
}
