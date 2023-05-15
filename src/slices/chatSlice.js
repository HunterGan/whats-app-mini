/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { chats: [], activeChatId: null };

export const activeChatId = null;

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setInitialState(state, { payload }) {
      console.log('adding payload', payload);
      state.chats = payload;
      // state.currentChannelId = currentChannelId;
    },
    addChannel(state, { payload }) {
      console.log(state, payload);
      // state.channels.push(payload);
    },
    setActiveChannel(state, { payload }) {
      console.log('tryuing to add, payload: ', payload);
      // const { id } = payload;
      // state.currentChannelId = id;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
