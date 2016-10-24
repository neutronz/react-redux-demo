import Body from '../components/Body'
import Header from '../components/Header'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchGifs, setSearchInput } from '../actions'
import { RESULT_LIMIT } from '../constants'

class App extends Component {

    constructor (props) {
        super(props)
    }

    componentDidMount () {

        const { defaultSearch, dispatch } = this.props

        dispatch(fetchGifs(defaultSearch))
    }

    render () {

        const {
            count,
            dispatch,
            gifs,
            isFetching,
            offset,
            query,
            searchInput
        } = this.props

        return (
            <div>
                <Body
                    count={count}
                    gifs={gifs}
                    isFetching={isFetching}
                    offset={offset}
                    searchGiphy={() =>
                        dispatch(fetchGifs(query, offset + RESULT_LIMIT))
                    }
                />
                <Header
                    searchGiphy={searchInput =>
                        dispatch(fetchGifs(searchInput))
                    }
                    searchInput={searchInput}
                    setSearchInput={searchInput =>
                        dispatch(setSearchInput(searchInput))
                    }
                />
                <div className="credits" />
            </div>
        )
    }
}

const mapStateToProps = state => {

    const { giphy } = state
    const {
        count,
        defaultSearch,
        gifs,
        isFetching,
        offset,
        query,
        searchInput
    } = giphy

    return {
        count,
        defaultSearch,
        gifs,
        isFetching,
        offset,
        query,
        searchInput
    }
}

export default connect(mapStateToProps)(App)
