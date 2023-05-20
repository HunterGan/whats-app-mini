/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { actions as chatActions } from './chatSlice.js';

const initialState = { messages: {} };

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, { payload }) {
      console.log(state, payload);
      // state.messages.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(chatActions.setActiveChat, (state, { payload }) => {
      console.log(state, payload);
      // const { messages } = payload;
      // state.messages = messages;
    });
  },
});

export const { actions } = messagesSlice;
export default messagesSlice.reducer;
