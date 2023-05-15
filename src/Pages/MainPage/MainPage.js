import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

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
  const activeChannel = true;
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get(routes.usersPath(), { headers: auth.getAuthHeader() });
    //     dispatch(channelsActions.setInitialState(data));
    //     setLoading(false);
    //   } catch (e) {
    //     rollbar.error('Error fetching initialData', e);
    //     if (!e.isAxiosError) {
    //       toast.error(t('errors.unknownError'));
    //       return;
    //     }

    //     if (e.response?.status === 401) {
    //       auth.logOut();
    //       navigate(routes.login);
    //     } else {
    //       toast.error(t('errors.loadError'));
    //     }
    //   }
    // };
    // fetchData();
    const fetchData = async () => {
      try {
        const { data } = await axios.get(routes.getContacts(ID_INSTANCE, API_TOKEN_INSTANCE));
        console.log('got data: ', data);
        dispatch(actions.setInitialState(data));
      } catch (e) {
        console.log('ERRRRRRRRRRRRRRRRRR', e.data);
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      {activeChannel ? <Chat /> : (
        <div className="chat__empty">
          <EmptyChatIcon />
          <p>WhatsApp Web</p>
        </div>
      )}
    </>
  );
};
export default MainPage;
