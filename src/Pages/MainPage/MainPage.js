import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import './MainPage.css';
import Sidebar from '../../components/Sidebar.js';
import Chat from '../../components/Chat.js';
import { ReactComponent as EmptyChatIcon } from '../../components/svg/EmptyChatIcon.svg';
import { actions } from '../../slices/index.js';
import routes from '../../routes.js';

const ID_INSTANCE = 1101820851;
const API_TOKEN_INSTANCE = '384bc9870e524a5aae4f9a96add834f31f454de1bf8d47b9a8';

const MainPage = () => {
  const dispatch = useDispatch();
  const { activeChatId } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        dispatch(actions.setActiveChannel({ id: null }));
      }
    };
    const fetchContacts = async () => {
      try {
        const { data } = await axios.get(routes.getContacts(ID_INSTANCE, API_TOKEN_INSTANCE));
        console.log('got data: ', data);
        dispatch(actions.setInitialState(data));
      } catch (e) {
        console.log('ERRRRRRRRRRRRRRRRRR', { ...e });
      }
    };
    document.addEventListener('keydown', handleEsc);
    fetchContacts();
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      {activeChatId ? <Chat id={activeChatId} /> : (
        <div className="chat__empty">
          <EmptyChatIcon />
          <p>WhatsApp Web</p>
        </div>
      )}
    </>
  );
};
export default MainPage;
