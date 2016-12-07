import React, { PropTypes } from 'react'
import { RESULT_LIMIT } from '../constants'

const Body = ({
    count,
    gifs,
    isFetching,
    loadMore,
    offset
}) => (
    <div className='body row scrollY'>
        {
            gifs.length > 0 ?
                <div className='imagesFrame'>
                    {
                        gifs.map((gif, i) =>
                            <div className='gifRect' key={i}>
                                <img src={gif.images.fixed_height.url} />
                            </div>
                        )
                    }
                    <div style={{ clear: 'both' }} />
                    {
                        offset < count && count > RESULT_LIMIT ?
                            <button
                                className='loadMore'
                                onClick={loadMore}
                            >
                                more
                            </button>
                            : null
                    }
                </div> :
                isFetching === false
                    ? <div className='statusMsg'>No results</div>
                    : null
        }
        {
            isFetching === true
                ? <div className='statusMsg'>Loading ..</div>
                : null
        }
    </div>
)

Body.propTypes = {
    count: PropTypes.number.isRequired,
    gifs: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    offset: PropTypes.number.isRequired
}

Body.defaultProps = {
    count: 0,
    gifs: [],
    isFetching: false,
    loadMore: () => {},
    offset: 0
}

export default Body
