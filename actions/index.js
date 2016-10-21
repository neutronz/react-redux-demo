import * as types from '../constants/ActionTypes'
import 'whatwg-fetch'

const apiKey = 'dc6zaTOxFJmzC'
// TODO :: MAKE DYN
const limit = 100
const offset = 0

const receiveGifs = json => {

    const {
        data: gifs = [],
        pagination
    } = json
    const {
        count: take = 0,
        offset: skip = 0,
        total_count: count = 0
    } = pagination

    return {
        type: types.RECEIVE_GIFS,
        count,
        gifs,
        skip,
        take
    }
}

const requestGifs = ()  => ({
    type: types.REQUEST_GIFS
})

export const setSearchInput = searchInput => ({
    type: types.SET_SEARCH_INPUT,
    searchInput
})

export function fetchGifs (searchInput) {

    return dispatch => {

        dispatch(requestGifs())

        return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}&limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(json => dispatch(receiveGifs(json)))
            .catch(err => console.error(err))
    }
}
