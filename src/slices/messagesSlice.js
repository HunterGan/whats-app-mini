/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { receiveNotifications } from '../api/index.js';

const initialState = { messages: [] };

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async (_, { dispatch }) => {
    console.log('Starting async Chunk - props', dispatch);
    try {
      const response = await receiveNotifications();
      const webhookBody = response && response.body;
      if (!webhookBody) throw new Error('No webhook');
      if (webhookBody.typeWebhook === 'incomingMessageReceived' || webhookBody.typeWebhook === 'outgoingMessageReceived') {
        console.log('show me message!!', response);
        const {
          idMessage, timestamp, messageData, senderData,
        } = webhookBody;
        const { chatId, sender, chatName } = senderData;
        const messageText = (messageData.typeMessage === 'reactionMessage')
          ? messageData.extendedTextMessageData.text
          : (messageData.typeMessage === 'textMessage ') && messageData.textMessageData.textMessage;
        // if (response.receiptId) await deleteNotification(response.receiptId);
        // if (messageText) {

        // }
        return {
          idMessage, timestamp, chatId, sender, text: messageText,
        };
      }
      throw new Error();
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
      console.log('ADDMESSAGE SLICE', state, payload);
      const message = payload;
      state.messages.push(message);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        console.log('state is: ', current(state));
        const message = action.payload;
        state.messages.push(message);
      });
  },
});

export const { actions } = messagesSlice;
export default messagesSlice.reducer;
