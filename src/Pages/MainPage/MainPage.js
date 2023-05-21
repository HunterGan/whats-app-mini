import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MainPage.css';
import Sidebar from '../../components/Sidebar.js';
import Chat from '../../components/Chat.js';
import { ReactComponent as EmptyChatIcon } from '../../components/svg/EmptyChatIcon.svg';
import { actions } from '../../slices/index.js';
import { getContacts } from '../../api/index.js';

const MainPage = () => {
  const dispatch = useDispatch();
  const { activeChatId } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    const abortController = new AbortController();
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        dispatch(actions.setActiveChat({ id: null }));
      }
    };
    const fetchContacts = async () => {
      try {
        const { data } = await getContacts();
        console.log('CONSOLE.LOG MainPage getContacts ', data);
        dispatch(actions.setInitialState(data));
      } catch (e) {
        console.log('ERRRRRRRRRRRRRRRRRR', { ...e });
      }
    };
    document.addEventListener('keydown', handleEsc);
    fetchContacts();
    return () => {
      abortController.abort();
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
