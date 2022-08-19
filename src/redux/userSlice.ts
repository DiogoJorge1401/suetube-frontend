import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  _id: string
  username: string
  email: string
  subscribedUsers: string[]
  subscribers: number
  img: string
}

export interface UserInitialState {
  currentUser: User
  loading: boolean
  error: boolean
}

const initialState: UserInitialState = {
  currentUser: null as unknown as User,
  loading: false,
  error: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.loading = false
      state.error = false
      state.currentUser = action.payload
    },
    loginFailure(state) {
      state.loading = false
      state.error = true
    },
    logout(state) {
      Object.assign(state, initialState)
    },
    subscription(state, action) {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        const idx = state.currentUser.subscribedUsers.findIndex((u) => u === action.payload)
        state.currentUser.subscribedUsers.splice(idx, 1)
      } else {
        state.currentUser.subscribedUsers.push(action.payload)
      }
    },
    unsubscription(state, action) {
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        const idx = state.currentUser.subscribedUsers.findIndex((u) => u === action.payload)
        state.currentUser.subscribedUsers.splice(idx, 1)
      }
    }
  }
})

export const { loginFailure, loginStart, loginSuccess, logout, subscription } = userSlice.actions

export const { reducer: userReducer } = userSlice