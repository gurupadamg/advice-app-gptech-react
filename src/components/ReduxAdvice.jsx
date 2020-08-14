import React, { useEffect }from 'react'
import {connect} from 'react-redux'
import '../App.css';
import {fetchAdvice} from '../redux'

const mapStateToProps = state => {
    return {
        advice: state.advice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAdvice: () => dispatch(fetchAdvice(1))
    }
}

function ReduxAdvice(props) {
    
    useEffect(() => {
        props.fetchAdvice()

    }, [])

    return (
        <div className="card">
            <h1 className="heading">{props.advice}</h1>
            <button className="button" onClick={props.fetchAdvice}>
                <span>GIVE ME ADVICE!</span>
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAdvice)
