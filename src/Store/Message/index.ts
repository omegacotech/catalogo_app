import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'message',
  initialState: { message: null } as MessageState,
  reducers: {
    sendMessage: (state, { payload: { message } }: MessagePayload) => {
      if (typeof message !== 'undefined') {
        state.message = message
      }
    },
    clear: (state) => {
      state.message = null
    }
  },
})

export const { sendMessage, clear } = slice.actions

export const messageSelector = (state: MessageState) => state.message

export default slice.reducer

export type Message = {
  message: string | null,
}

export type MessageState = {
  message: string | null
}

type MessagePayload = {
  payload: {
    message: string | null
  }
}
