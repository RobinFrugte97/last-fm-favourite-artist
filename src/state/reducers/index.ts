import { combineReducers } from 'redux'
import { favouritesReducer } from './favouritesReducer'
import { headerReducer } from './headerReducer'
import { userReducer } from './userReducer'

const reducers = combineReducers({
    favourites: favouritesReducer,
    user: userReducer,
    header: headerReducer
})

export default reducers

export type State = ReturnType<typeof reducers>