import React, { PropTypes } from 'react'
import SearchInput from './SearchInput'

const Header = props => (
    <div className='header row'>
        <SearchInput {...props} />
    </div>
)

Header.propTypes = {
    searchGiphy: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired
}

export default Header
