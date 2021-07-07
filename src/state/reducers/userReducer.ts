import { UserSession, UserAction } from "../../interface"

const initalState = {
    key: "",
    user: "",
    subscriber: 0
}

export const userReducer = (state: UserSession = initalState, action: UserAction) => {
    switch (action.type) {
        case 'add':
            return state = action.payload
        default:
            return state
    }
}