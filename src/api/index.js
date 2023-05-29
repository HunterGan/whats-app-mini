import axios from 'axios';
import routes from '../routes';

const ID = process.env.REACT_APP_ID_INSTANCE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN_INSTANCE;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const updateInterval = 5000;

const getStateInstance = async (userId, userToken) => {
  console.log('Trying async req getContacts');
  try {
    const stateInstance = await axios.get(routes.getStateInstance(userId, userToken));
    return stateInstance;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getContacts = async () => {
  console.log('Trying async req getContacts');
  try {
    const data = await axios.get(routes.getContacts(ID, API_TOKEN));
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getChatMessages = async (id) => {
  console.log('Trying async req getChatMessages');
  try {
    const data = await axios
      .post(routes.getChatHistory(ID, API_TOKEN), { chatId: id, count: 10 }, config);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getContactInfo = async (id) => {
  console.log('Trying async req getContactInfo');
  try {
    const contactInfo = await axios
      .post(routes.getContactInfo(ID, API_TOKEN), { chatId: id }, config);
    return contactInfo;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getChatHistory = async (id) => {
  try {
    const data = await axios
      .post(routes.getChatHistory(ID, API_TOKEN), { chatId: id, count: 10 }, config);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getLastIncomingMessages = async () => {
  try {
    const incoming = await axios
      .get(routes.getLastIncomingMessages(ID, API_TOKEN), config);
    return incoming;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getLastOutgoingMessages = async () => {
  try {
    const outcoming = await axios
      .get(routes.getLastOutgoingMessages(ID, API_TOKEN), config);
    return outcoming;
  } catch (e) {
    throw new Error(e.message);
  }
};

const receiveNotifications = async () => {
  try {
    const response = await axios
      .get(routes.receiveNotification(ID, API_TOKEN), config);
    console.log('Notification is: ', response);
    const { data } = response;
    return data;
  } catch (e) {
    console.log('ERRORO: ', e.message);
    throw new Error(e.message);
  }
};

const deleteNotification = async (receiptId) => {
  try {
    const response = await axios
      .delete(routes.deleteNotification(ID, API_TOKEN, receiptId), config);
    console.log('Delete notification is: ', response);
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

// const updateMessages = () => async () => {
//   console.log('');
// };

export {
  getStateInstance,
  getContacts,
  getChatMessages,
  getContactInfo,
  getChatHistory,
  getLastIncomingMessages,
  getLastOutgoingMessages,
  receiveNotifications,
  deleteNotification,
};
