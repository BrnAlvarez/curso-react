import {SAVE_INFORMATION, SAVE_USER} from './types'

const initialState = {
    user_logged: '',
    information: ''

}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_USER:{
            return {
                ...state,
                user_logged: action.payload
            }
        }
        case SAVE_INFORMATION:{
            return {
                ...state,
                information: action.payload
            }
        }

        default:{
            return state
        }
    }

}
export default userReducer