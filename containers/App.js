import Body from '../components/Body'
import Header from '../components/Header'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class App extends Component {

    constructor (props) {
        super(props)
    }

    componentDidMount () {

        const { defaultSearch, dispatch } = this.props

        dispatch(Actions.fetchGifs(defaultSearch))
    }

    render () {

        const boundActions = bindActionCreators(Actions, this.props.dispatch)

        return (
            <div>
                <Header {...this.props} {...boundActions} />
                <Body {...this.props} {...boundActions} />
                <img
                    className='credits'
                    src='./images/Poweredby_100px-Black_VertText.png' />
            </div>
        )
    }
}

const mapStateToProps = ({ giphy }) => ({...giphy})

export default connect(mapStateToProps)(App)
