import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Sidebar.js';
import Chat from '../../components/Chat.js';
import EmptyChatFiller from '../../components/EmptyChatFiller';
import { actions } from '../../slices/index.js';
import { getContacts } from '../../api/index.js';

const MainPage = () => {
  const dispatch = useDispatch();
  const { activeChatId } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        dispatch(actions.setActiveChat({ id: null }));
      }
    };
    const fetchContacts = async () => {
      try {
        const { data } = await getContacts();
        console.log('GOT contacts', data);
        dispatch(actions.setInitialState({ chats: data }));
      } catch (e) {
        console.log('ERROR getting contacts', e.message);
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
      {activeChatId
        ? <Chat id={activeChatId} />
        : (
          <EmptyChatFiller>
            <p>WhatsApp GreenApi</p>
          </EmptyChatFiller>
        )}
    </>
  );
};
export default MainPage;
