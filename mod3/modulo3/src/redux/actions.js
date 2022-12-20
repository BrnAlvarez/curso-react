import { SAVE_USER } from "./types"
import { SAVE_INFORMATION } from "./types"
import { SAVE_USER_DATA_CREATE } from "./types"
import { SAVE_CLIENT_DATA_CREATE } from "./types"

export const setSaveUserLogged = (userName) => {
    return {
        type:SAVE_USER,
        payload: userName
    }
}
export const setSaveInformation = (information) => {
    return {
        type:SAVE_INFORMATION,
        payload: information
    }
}
export const setSaveUserDataCreate = (data) => {
    return {
        type:SAVE_USER_DATA_CREATE,
        payload: data
    }
}
export const setSaveClientDataCreate = (data) => {
    return {
        type:SAVE_CLIENT_DATA_CREATE,
        payload: data
    }
}