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

// the state data
export interface List {
    emailList:Profile[]
}

const initialState : List = {
   emailList:[]
}



export const emaiSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    updateMailList:( initialState,action)=>{
      console.log("this is the action payload",action.payload)
      const prof = action.payload
       if(initialState.emailList.find(profile=>profile.id==action.payload._id)){
        initialState.emailList = initialState.emailList.filter((item)=> item._id!=prof.id)
       }
       else{
        initialState.emailList.push({
          id:prof._id,
          name:prof.name,
          email:prof.email, 
          company:prof.company,
          currentDesignation:prof.currentDesignation,
          addedOn:prof.addedOn
        })
       }
       console.log(" this is the email list ater checking ",initialState.emailList)
    }
  }
})

// Action creators are generated for each case reducer function
export const {updateMailList} = emaiSlice.actions

export default emaiSlice.reducer