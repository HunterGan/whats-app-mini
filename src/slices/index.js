import { combineReducers } from '@reduxjs/toolkit';
import chatReducer, { actions as chatActions, activeChatId } from './chatSlice.js';

import messagesReducer, { actions as messagesActions } from './messagesSlice.js';

const actions = {
  ...chatActions,
  ...messagesActions,
};

export {
  actions,
  activeChatId,
};

export default combineReducers({
  chatReducer,
  messagesReducer,
});
