import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import emailSlice from './slices/emailList'
import userDataSlice from './slices/userData'
export const store = configureStore({
  reducer: {
    authorization: authSlice,
    emailList:emailSlice,
    userData:userDataSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch