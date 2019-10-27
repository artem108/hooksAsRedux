import { useReducer } from 'react'

const initialState = {
  episodes: [],
  favourites: []
}

const reducer = (state, {type, payload}) => {
  switch (type) {
     case 'FETCH_DATA':
        return { ...state, episodes: payload }
     case 'ADD_FAV':
        return {
          ...state,
          favourites: [...state.favourites, payload]
        }
     case 'REMOVE_FAV':
        return {
          ...state,
          favourites: payload
        }
     default:
       return state
   }
}

export default () => useReducer(reducer, initialState)
