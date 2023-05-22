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
    .post(routes.getChatHistory(ID, API_TOKEN), { chatId: id, count: 10 }, config);

  return data;
};

const getLastMessages = async () => {
  console.log('Trying async req getChatMessages');
  /// This endpoint returns only outoing messages... wtf?
  // const data = await axios
  //   .post(routes.getChatHistory(ID, API_TOKEN), { chatId: id, count: 10 }, config);
  /// Thats why i'm going to download incoming and outcoming separate
  const incoming = await axios
    .get(routes.getLastIncomingMessages(ID, API_TOKEN), config);
  const outcoming = await axios
    .get(routes.getLastIncomingMessages(ID, API_TOKEN), config);
  /// const lastMessages = Promise.all([incoming, outcoming]);
  const lastMessages = [...incoming, ...outcoming];
  console.log('Last messages are: ', lastMessages);
  return lastMessages;
};

export {
  getStateInstance,
  getContacts,
  getChatMessages,
  getLastMessages,
};
