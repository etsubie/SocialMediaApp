import {combineReducers} from 'redux'
import postReducer from './posts'

const reducers =  combineReducers({
   posts: postReducer
})

export default reducers