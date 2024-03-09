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
    userName:string,
    userEmail:string,
    userLeads:Profile[]
}

const initialState : userData = {
    userName:'',
    userEmail:'',
   userLeads:[]
}



export const userDataSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    setUserInfo:( initialState,action)=>{
        initialState.userName = action.payload.name
        initialState.userEmail = action.payload.useremail
        action.payload.emails.forEach((element: {
                id: string; name: string; email: string; company // defigning the type of the state
                    : string; profession: string; date: string
            }) => {
            initialState.userLeads.push(element);
        });
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserInfo} = userDataSlice.actions

export default userDataSlice.reducer