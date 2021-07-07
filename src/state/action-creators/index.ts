import { Track, Action, UserSession, UserAction, HeaderAction } from "../../interface"
import { Dispatch } from 'redux'


const addToFavourite = (track: Track) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "add",
            payload: track
        })
    }
}

const removeFromFavourite = (track: Track) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "remove",
            payload: track
        })
    }
}

const userAuthenticated = (user: UserSession) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: "add",
            payload: user
        })
    }
}

const setHeaderImg = (img: string) => {
    return (dispatch: Dispatch<HeaderAction>) => {
        dispatch({
            type: "set",
            payload: img
        })
    }
}


export {
    addToFavourite,
    removeFromFavourite,
    userAuthenticated,
    setHeaderImg
}