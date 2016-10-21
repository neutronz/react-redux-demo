import * as types from '../constants/ActionTypes'

const initialState = {
    count: 0,
    defaultSearch: 'silicon valley',
    isFetching: false,
    gifs: [],
    searchInput: '',
    skip: 0,
    take: 0
}

export default function giphy(state = initialState, action) {

    switch(action.type) {

    case types.RECEIVE_GIFS:

        const { count, gifs, skip, take } =  action

        return Object.assign({}, state, {
            count,
            gifs,
            isFetching: false,
            skip,
            take
        })

    case types.REQUEST_GIFS:

        return Object.assign({}, state, {
            gifs: [],
            isFetching: true
        })

    case types.SET_SEARCH_INPUT:

        const { searchInput } = action

        return Object.assign({}, state, {
            searchInput
        })

    default:
        return state
    }
}
