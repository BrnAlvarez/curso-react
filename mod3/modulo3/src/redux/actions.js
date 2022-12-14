import { SAVE_USER } from "./types"
import { SAVE_INFORMATION } from "./types"

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