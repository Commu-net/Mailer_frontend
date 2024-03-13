import { createSlice } from '@reduxjs/toolkit'

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
    checkLogIn : (state)=>{
       if(localStorage.getItem('communet_user_sub')){
           state.isLoggedIn = true
       }
    }
  },
})

// Action creators are generated for each case reducer function
export const { login,logout,checkLogIn} = authSlice.actions

export default authSlice.reducer