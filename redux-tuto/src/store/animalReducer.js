import * as ActionType from './actionType.js'

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
    case ActionType.ADD_ANIMAL_ACTION:
      return [...state, {animalId: ++animalId, ...action.payload , favorite:false}]
    case ActionType.UPDATE_ANIMAL_ACTION:
      return state.map(animal => {
        if(animal.animalId === action.payload.animalId){
          return {...animal, ...action.payload}
        }else{
          return animal
        }
      })
    case ActionType.DELETE_ANIMAL_ACTION:
      return state.filter(animal => animal.animalId !== action.payload)
    default:
      return state
  }
}
