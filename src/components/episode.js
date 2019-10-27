import React, { useState, useEffect, useReducer, useContext } from 'react'
import { Store } from '../store'
import { toggleFavAction } from '../actions/actions'

export default episode => {
  const {state, dispatch} = useContext(Store)
  const {id, image, name, season, number} = episode

  return (
    <section key={id} className='episode-box'>
        {
          image && image.medium && <img src={image.medium} />
        }
        <div>{episode.name}</div>
        <section>
            Season: {episode.season} Number: {episode.number}
        </section>
        <button type='button' onClick={() => toggleFavAction(dispatch, state, episode)}>
            {
              state.favourites.find(fav =>
              fav.id === episode.id) ? 'Unfav' : 'Fav'
            }
        </button>
    </section>
  )
}
