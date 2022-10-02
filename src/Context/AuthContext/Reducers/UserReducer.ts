import { GET_USER } from '../AuthTypes'
import { IActions, IAuthState } from '../Interfaces'

export const userReducer = (state: IAuthState, action: IActions) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}
