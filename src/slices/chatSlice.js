/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { chats: [], activeChatId: null };

export const activeChatId = null;

const slice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setInitialState(state, { payload }) {
      const { chats } = payload;
      console.log('Chats are: ', chats);
      state.chats = chats;
    },
    setActiveChat(state, { payload }) {
      const { id } = payload;
      state.activeChatId = id;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
