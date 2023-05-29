/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { actions as chatActions } from './chatSlice.js';
import { receiveNotifications } from '../api/index.js';

const initialState = { messages: {} };

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    console.log('Starting async Chunk');
    try {
      const response = await receiveNotifications();
      const webhookBody = response && response.body;
      if (!webhookBody) throw new Error('No webhook');
      if (webhookBody.typeWebhook === 'incomingMessageReceived' || webhookBody.typeWebhook === 'outgoingMessageReceived') {
        console.log('show me message!!', response);
        const {
          idMessage, timestamp, messageData, senderData,
        } = response.body;
        const { chatId } = senderData;
        const { text } = messageData.extendedTextMessageData;
        return {
          idMessage, timestamp, chatId, text,
        };
      }
      throw new Error();
      // if (response.receiptId) await deleteNotification(response.receiptId);
    } catch (e) {
      throw new Error(e.message);
    }
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, { payload }) {
      console.log(state, payload);
      const message = payload;
      state.messages[message.chatId].unshift(message);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(chatActions.setActiveChat, (state, { payload }) => {
      console.log(state, payload);
      // const { messages } = payload;
      // state.messages = messages;
    })
      .addCase(chatActions.setInitialState, (state, { payload }) => {
        const { chats } = payload;
        chats.forEach((chat) => {
          state.messages[chat.id] = [];
        });
        // const { messages } = payload;
        // state.messages = messages;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        const message = action.payload;
        state.messages[message.chatId].unshift(message);
        console.log('Action is: ', action);
      });
  },
});

export const { actions } = messagesSlice;
export default messagesSlice.reducer;
