import React, { PropTypes } from 'react'
import SearchInput from './SearchInput'

const Header = ({
    searchGiphy,
    searchInput,
    setSearchInput
}) => (
    <div className='header row'>
        <SearchInput
            searchGiphy={searchGiphy}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
        />
    </div>
)

Header.propTypes = {
    searchGiphy: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired
}

export default Header
