import { HeaderAction } from "../../interface"

const initalState = ""

export const headerReducer = (state: string = initalState, action: HeaderAction) => {
    switch (action.type) {
        case 'set':
            return state = action.payload
        default:
            return state
    }
}