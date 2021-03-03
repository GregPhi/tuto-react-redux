import { ADD_ANIMAL_ACTION, UPDATE_ANIMAL_ACTION, DELETE_ANIMAL_ACTION } from './action.js'

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

export function animalReducer(state = animals, action) {
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
