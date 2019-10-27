import React, {createContext, useReducer} from 'react'
import reducer from './reducers/reducer'
export const Store = createContext();

export const StoreProvider = props => {
  const [state, dispatch] = reducer()

  return (
    <Store.Provider value={{state, dispatch}}>{props.children}
    </Store.Provider>
  )
}
