import { combineReducers } from 'redux'
import { favouritesReducer } from './favouritesReducer'

const reducers = combineReducers({
    favourites: favouritesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>