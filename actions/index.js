import * as types from '../constants/ActionTypes'
import querystring from 'querystring'
import { RESULT_LIMIT } from '../constants'
import 'whatwg-fetch'

const apiKey = 'dc6zaTOxFJmzC'

/**
 * SYNC
 */

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

const requestGifs = (query, offset) => ({
    type: types.REQUEST_GIFS,
    query,
    offset
})

export const setSearchInput = searchInput => ({
    type: types.SET_SEARCH_INPUT,
    searchInput
})


/**
 * MIDDEWARE
 */

export const loadMore = () => (dispatch, getState) => {

    const { giphy } = getState()
    const { offset, query } = giphy

    return dispatch(fetchGifs(query, offset + RESULT_LIMIT))
}


/**
 * ASYNC
 */

export const fetchGifs = (query, offset = 0) => dispatch => {

    dispatch(requestGifs(query, offset))

    const qs = querystring.stringify({
        api_key: apiKey,
        limit: RESULT_LIMIT,
        offset,
        q: query
    })

    fetch(`http://api.giphy.com/v1/gifs/search?${qs}`)
        .then(res => res.json())
        .then(json => dispatch(receiveGifs(json)))
        .catch(err => console.error(err))
}
