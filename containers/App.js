import Body from '../components/Body'
import Header from '../components/Header'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchGifs, setSearchInput } from '../actions'

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
            dispatch,
            gifs,
            isFetching,
            searchInput
        } = this.props

        return (
            <div>
                <Body gifs={gifs} isFetching={isFetching} />
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
        defaultSearch,
        gifs,
        isFetching,
        searchInput
    } = giphy

    return {
        defaultSearch,
        gifs,
        isFetching,
        searchInput
    }
}

export default connect(mapStateToProps)(App)
