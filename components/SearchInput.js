import React, { Component, PropTypes } from 'react'

export default class SearchInput extends Component {

    constructor (props) {
        super(props)
    }

    render () {

        const {
            searchGiphy,
            searchInput,
            setSearchInput
        } = this.props

        return (
            <input
                className='searchInput'
                onChange={e => setSearchInput(e.target.value)}
                onFocus={() => setSearchInput('')}
                onKeyDown={e => {

                    const key = window.Event ? e.which : e.keyCode

                    if (key !== 13 || searchInput.trim() === '') {
                        return
                    }

                    // Blur input
                    this.refs.searchInput.blur()

                    // Search
                    searchGiphy(searchInput.trim())
                }}
                placeholder='Search Giphy'
                ref='searchInput'
                type='text'
                value={searchInput}
            />
        )
    }
}

SearchInput.propTypes = {
    searchGiphy: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired
}
