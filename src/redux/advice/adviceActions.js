import {GET_ADVICE} from './adviceTypes'
import axios from 'axios'



export const getAdvice = advice => {
    return {
        type: GET_ADVICE,
        payload: advice
    }
}

export const fetchAdvice = (id = 1) => {
    return (dispatch) => {
        id = Math.floor(Math.random() * 205 ) + 1
        axios.get(`https://api.adviceslip.com/advice/${id}`)
        .then(result => {
            const data = JSON.parse(result.data + "}");
            console.log(result.data.slip)
            const {advice} = data.slip
            dispatch(getAdvice(advice))
            console.log(advice)
        })
        .catch(err => console.log(err.message))

    }
}