import { combineReducers } from '../../../Utils'
import { loadingReducer } from './LoadingReducer'
import { userReducer } from './UserReducer'

export const AuthReducers = combineReducers([loadingReducer, userReducer])
