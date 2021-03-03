import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addAnimalAction} from '../store/animalActions'

export function AddAnimalForm (){
  const dispatch = useDispatch()
  const input = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addAnimalAction(input.current.value))
    input.current.value = ''
    input.current.focus()
  }
  return <form id="newAnimalInList" onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" ref={input}/>
    <button>NewAnimal</button>
  </form>
}
