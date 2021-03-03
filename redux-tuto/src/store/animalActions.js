import * as ActionType from './actionType.js'

export const addAnimalAction = (name) => ({
  type: ActionType.ADD_ANIMAL_ACTION,
  payload: {name}
})

export const toggleAnimalAction = (animal) => ({
  type: ActionType.UPDATE_ANIMAL_ACTION,
  payload: {...animal, favorite:!animal.favorite}
})

export const deleteAnimalAction = (animal) => ({
  type: ActionType.DELETE_ANIMAL_ACTION,
  payload: animal.animalId
})
