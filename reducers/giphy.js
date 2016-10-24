import * as types from '../constants/ActionTypes'

const initialState = {
    count: 0,
    defaultSearch: 'silicon valley',
    isFetching: false,
    gifs: [],
    offset: 0,
    query: '',
    searchInput: '',
}

export default function giphy(state = initialState, action) {

    switch(action.type) {

    case types.RECEIVE_GIFS:

        const { count, offset, gifs } = action

        return Object.assign({}, state, {
            count,
            gifs: offset === 0
                ? gifs
                : [...state.gifs, ...gifs],
            isFetching: false,
            offset
        })

    case types.REQUEST_GIFS: {

        const { offset = state.offset, query } = action

        return Object.assign({}, state, {
            gifs: offset === 0
                ? []
                : state.gifs,
            isFetching: true,
            query
        })
    }

    case types.SET_SEARCH_INPUT:

        const { searchInput } = action

        return Object.assign({}, state, {
            searchInput
        })

    default:
        return state
    }
}
