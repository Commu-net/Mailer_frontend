import { createSlice } from '@reduxjs/toolkit'

// defigning the type of the state
export interface Profile {
  id:string,
  name:string,
  email:string,
  company:string,
  currentDesignation:string,
  addedOn:string,
}

export interface userData {
    userId:string,
    userName:string,
    userEmail:string,
    userLeads:Profile[],
    change:boolean
}

const initialState : userData = {
    userId:"",
    userName:'',
    userEmail:'',
    userLeads:[],
    change:false
}



export const userDataSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userId = action.payload.id;
      state.userName = action.payload.name;
      state.userEmail = action.payload.useremail;
      // set the list empty before adding the new list
      state.userLeads = [];
      action.payload.emails?.forEach((element: Profile) => {
        state.userLeads.find((item:Profile) => item.email === element.email) ? state.userLeads : state.userLeads.push(element);
      });
    },
    setChange:(state, action) => {
      state.change = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {setUserInfo,setChange} = userDataSlice.actions

export default userDataSlice.reducer