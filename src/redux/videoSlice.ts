import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Video {
  _id: string
  userId: string
  title: string
  description: string
  imgURL: string
  videoURL: string
  videoViews: number
  createdAt: string
  likes: string[]
  dislikes: string[]
  tags: string[]
}

export interface VideoInitialState {
  currentVideo: Video
  loading: boolean
  error: boolean
}

const initialState: VideoInitialState = {
  currentVideo: null as unknown as Video,
  loading: false,
  error: false
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<Video>) {
      state.loading = false
      state.error = false
      state.currentVideo = action.payload
    },
    fetchFailure(state) {
      state.loading = false
      state.error = true
    },
    like(state, action) {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload)
        const idx = state.
          currentVideo.
          dislikes.
          findIndex((u) => u === action.payload)
        state.currentVideo.dislikes.splice(idx, 1)
      }
      else {
        const idx = state.
          currentVideo.
          likes.
          findIndex((u) => u === action.payload)
        state.currentVideo.likes.splice(idx, 1)
      }
    },
    dislike(state, action) {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload)
        const idx = state.
          currentVideo.
          likes.
          findIndex((u) => u === action.payload)
        state.currentVideo.likes.splice(idx, 1)
      } else {
        const idx = state.
          currentVideo.
          dislikes.
          findIndex((u) => u === action.payload)
        state.currentVideo.dislikes.splice(idx, 1)
        
      }
    }
  }
})

export const { fetchFailure, fetchStart, fetchSuccess, dislike, like } = videoSlice.actions

export const { reducer: videoReducer } = videoSlice