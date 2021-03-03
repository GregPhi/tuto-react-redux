import { UPDATE_ANIMAL_ACTION } from './action.js'

export const toggleAnimalAction = (animal) => ({
  type: UPDATE_ANIMAL_ACTION,
  payload: {...animal, favorite:!animal.favorite}
})
