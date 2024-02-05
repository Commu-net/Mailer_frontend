import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// defigning the type of the state
export interface CounterState {
  isLoggedIn: boolean
  userName: string | null
}

// the state data
const initialState: CounterState = {
    isLoggedIn: false,
    userName: null,
}

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: (state) => {
        // for testing purpose keeping the functionality through button only 
      state.isLoggedIn = true
    //   state.userName = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
    //   state.userName = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = authSlice.actions

export default authSlice.reducer