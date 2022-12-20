import {SAVE_INFORMATION, SAVE_USER,SAVE_USER_DATA_CREATE,SAVE_CLIENT_DATA_CREATE} from './types'

const initialState = {
    user_logged: '',
    information: '',
    data: '',
    dataClient: ''

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
        case SAVE_USER_DATA_CREATE:{
            return {
                ...state,
                data: action.payload
            }
        }
        case SAVE_CLIENT_DATA_CREATE: {
            return {
                ...state,
                dataClient: action.payload
            }
        }
        default:{
            return state
        }
    }

}
export default userReducer