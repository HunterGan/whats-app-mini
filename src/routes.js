const apiPath = 'https://api.green-api.com/waInstance';

export default {
  main: '/',
  login: '/login',
  pageNotFound: '*',
  getStateInstance: (id, token) => `${apiPath}${id}/getStateInstance/${token}`,
  getContacts: (id, token) => `${apiPath}${id}/GetContacts/${token}`,
  getChatHistory: (id, token) => `${apiPath}${id}/GetChatHistory/${token}`,
  getLastIncomingMessages: (id, token) => `${apiPath}${id}/lastIncomingMessages/${token}`,
  getLastOutgoingMessages: (id, token) => `${apiPath}${id}/LastOutgoingMessages/${token}`,
  getContactInfo: (id, token) => `${apiPath}${id}/getContactInfo/${token}`,
  receiveNotification: (id, token) => `${apiPath}${id}/receiveNotification/${token}`,
  deleteNotification: (id, token, receiptId) => `${apiPath}${id}/receiveNotification/${token}/${receiptId}`,
};
