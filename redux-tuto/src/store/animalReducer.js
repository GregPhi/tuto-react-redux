import { ADD_ANIMAL_ACTION, UPDATE_ANIMAL_ACTION, DELETE_ANIMAL_ACTION } from './action.js'

let animalId = 3
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
  },
  {
    animalId: 3,
    name: "Shark",
    favorite: true
  }
]

export function animalReducer(state = animals, action) {
  switch (action.type) {
    case ADD_ANIMAL_ACTION:
      return [...state, {animalId: ++animalId, ...action.payload , favorite:false}]
    case UPDATE_ANIMAL_ACTION:
      return state.map(animal => {
        if(animal.animalId === action.payload.animalId){
          return {...animal, ...action.payload}
        }else{
          return animal
        }
      })
    case DELETE_ANIMAL_ACTION:
      break;
    default:
      return state
  }
}
