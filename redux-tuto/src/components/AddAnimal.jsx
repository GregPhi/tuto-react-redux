import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addAnimalAction} from '../store/animalActions'
import NewAnimalForm from '../generics/NewAnimalForm'

export function AddAnimalForm (){
  const dispatch = useDispatch()

  const handleSubmit = useCallback( animal => {dispatch(addAnimalAction(animal.name))}, [])
  return <NewAnimalForm onAdd={handleSubmit} />
}
