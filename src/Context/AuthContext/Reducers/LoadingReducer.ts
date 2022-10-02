import { ERROR, LOADED, LOADING } from '../AuthTypes'
import { IActions, IAuthState } from '../Interfaces'

export const loadingReducer = (state: IAuthState, action: IActions) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOADED:
      return {
        ...state,
        loading: false,
      }
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}
