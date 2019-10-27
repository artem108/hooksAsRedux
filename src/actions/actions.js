const FETCH_DATA = 'FETCH_DATA'
const ADD_FAV = 'ADD_FAV'
const REMOVE_FAV = 'REMOVE_FAV'

export const fetchDataAction = async dispatch => {
  const reponse = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const data = await reponse.json();

  return dispatch({
    type: FETCH_DATA,
    payload: data._embedded.episodes
  });
}

export const toggleFavAction = (dispatch, { favourites }, episode) =>
  favourites.includes(episode)
    ? dispatch({
        type: REMOVE_FAV,
        payload: favourites.filter(fav => fav.id !== episode.id)
      })
    : dispatch({
        type: ADD_FAV,
        payload: episode
      })
