import * as types from '../constants/ActionTypes'
import 'whatwg-fetch'

const apiKey = 'dc6zaTOxFJmzC'

const receiveGifs = json => {

    const {
        data: gifs = [],
        pagination
    } = json
    const {
        offset,
        total_count: count = 0
    } = pagination

    return {
        type: types.RECEIVE_GIFS,
        count,
        gifs,
        offset
    }
}

const requestGifs = query => ({
    type: types.REQUEST_GIFS,
    query
})

export const setSearchInput = searchInput => ({
    type: types.SET_SEARCH_INPUT,
    searchInput
})

export function fetchGifs (query, offset = 0) {

    return dispatch => {

        dispatch(requestGifs(query))

        return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=100&offset=${offset}`)
            .then(res => res.json())
            .then(json => dispatch(receiveGifs(json)))
            .catch(err => console.error(err))
    }
}
