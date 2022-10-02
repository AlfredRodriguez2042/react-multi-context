export interface IActions {
  type: string
  payload: any
}
export interface IAuthState {
  user: any
  errors: null | string
  loading: boolean
}
export interface IAuthProvider extends IAuthState {
  dispatch: (actions: IActions) => void
}
export interface AuthProps {
  children: JSX.Element | JSX.Element[]
}
