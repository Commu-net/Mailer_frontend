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
    userId:"65c3c7ab19728265ad970414",
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
      action.payload.emails?.forEach((element: Profile) => {
        console.log("this is the element",element)
        state.userLeads.find((item:Profile) => item.email === element.email) ? state.userLeads : state.userLeads.push(element);
        console.log(state.userLeads.find((item:Profile) => item.email === element.email)," for ",element)
      });
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserInfo} = userDataSlice.actions

export default userDataSlice.reducer