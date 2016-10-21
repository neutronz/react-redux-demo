import React, { PropTypes } from 'react'

const Body = ({
    gifs,
    isFetching
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
                    </div> :
                    <div className='statusMsg'>No results</div>
        }
    </div>
)

Body.propTypes = {
    gifs: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default Body
