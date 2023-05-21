import axios from 'axios';
import routes from '../routes';

const ID = process.env.REACT_APP_ID_INSTANCE;
const API_TOKEN = process.env.REACT_APP_API_TOKEN_INSTANCE;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const getStateInstance = async (userId, userToken) => {
  console.log('Trying async req getContacts');
  try {
    const stateInstance = await axios.get(routes.getStateInstance(userId, userToken));
    console.log(stateInstance);
  } catch (e) {
    console.log({ e });
  }
};

const getContacts = async () => {
  console.log('Trying async req getContacts');
  const data = await axios.get(routes.getContacts(ID, API_TOKEN));
  return data;
};

const getChatMessages = async (id) => {
  console.log('Trying async req getChatMessages');
  const data = await axios
    .post(routes.getChatHistory(ID, API_TOKEN), { chatId: id, count: 100 }, config);
  return data;
};

export {
  getStateInstance,
  getContacts,
  getChatMessages,
};
