import React, { useState, useEffect, useReducer, useContext } from 'react'
import { Store } from '../store'
import Episode from '../components/episode'
import { fetchDataAction } from '../actions/actions'

export default () => {
  const {state, dispatch} = useContext(Store)

  useEffect(() => {
    !state.episodes.length && fetchDataAction(dispatch)
  }, [])

  return (
    <React.Fragment >
      <section className="App App-header episode-layout">
      <div className='header'>
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes: Favourite(s) {state.favourites.length}</p>
        </div>
      </div>
      {
        state.episodes && state.episodes.map(episode =>
          <Episode key={episode.id} {...episode}/>
        )
      }
      </section>
    </React.Fragment>
  )
}
