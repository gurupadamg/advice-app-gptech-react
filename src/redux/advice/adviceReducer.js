import {GET_ADVICE} from './adviceTypes'

const initialState = {
    advice: 'Get Free Advice Here !!'
}

const adviceReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ADVICE: return {
            // Implementation
            advice: action.payload
        }

        default: return state
    }
}

export default adviceReducer