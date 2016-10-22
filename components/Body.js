import React, { PropTypes } from 'react'

const Body = ({
    count,
    gifs,
    isFetching,
    offset,
    searchGiphy
}) => (
    <div className='body row scrollY'>
        {
            isFetching === true ?
                <div className='statusMsg'>Loading ..</div> :
                gifs.length > 0 ?
                    <div className='imagesFrame'>
                        {
                            gifs.map((gif, i) =>
                                <div className="imageRect" key={i}>
                                    <img src={gif.images.fixed_height.url} />
                                </div>
                            )
                        }
                        <div style={{ clear: 'both' }} />
                        {
                            offset < count ?
                                <button
                                    onClick={searchGiphy}
                                >
                                    Load More
                                </button>
                                : null
                        }
                    </div> :
                    <div className='statusMsg'>No results</div>
        }
    </div>
)

Body.propTypes = {
    count: PropTypes.number.isRequired,
    gifs: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    offset: PropTypes.number.isRequired,
    searchGiphy: PropTypes.func.isRequired
}

export default Body
