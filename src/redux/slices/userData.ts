import { createSlice } from '@reduxjs/toolkit'

// defigning the type of the state
export interface Profile {
  id:string,
  name:string,
  email:string,
  company:string,
  profession:string,
  date:string,
}

export interface userData {
    userId:string,
    userName:string,
    userEmail:string,
    userLeads:Profile[]
}

const initialState : userData = {
    userId:"",
    userName:'',
    userEmail:'',
   userLeads:[]
}



export const userDataSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userId = action.payload.id;
      state.userName = action.payload.name;
      state.userEmail = action.payload.useremail;
      action.payload.emailSelected?.forEach((element: Profile) => {
        state.userLeads.push(element);
      });
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserInfo} = userDataSlice.actions

export default userDataSlice.reducer