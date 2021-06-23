import { Track, Action } from "../../interface"
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


export {
    addToFavourite,
    removeFromFavourite
}