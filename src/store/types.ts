export type AuthState = {
  isAuth: boolean
  isAdmin: boolean
  id: string
  name: string
  email: string
  token: string
}

export type InitialStateType = {
  user: AuthState
}