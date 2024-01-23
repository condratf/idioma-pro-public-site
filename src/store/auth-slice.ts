import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateType } from "./types"

const initialState: InitialStateType = {
  user: {
    isAuth: false,
    isAdmin: false,
    id: "",
    name: "",
    email: "",
    token: "",
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut() {
      return initialState
    },
  },
})

export const {logOut} = authSlice.actions
export default authSlice.reducer