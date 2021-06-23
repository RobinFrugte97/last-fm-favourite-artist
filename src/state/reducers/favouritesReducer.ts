import { removeTrack } from "../../helpers/functions"
import { Track, Action } from "../../interface"

const initalState = [{
        name: "",
        duration: "",
        artist: {},
        album: "",
        '@attr': {
            rank: ""
        },
        playcount: "",
        url: ""
}]

export const favouritesReducer = (state: Array<Track> = initalState, action: Action) => {
    switch (action.type) {
        case 'add':
            return state.concat([action.payload])
        case 'remove':
            return removeTrack(state, action.payload)
        default:
            return state
    }
}