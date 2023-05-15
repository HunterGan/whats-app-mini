import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css';
import { ReactComponent as Avatar } from './svg/Avatar.svg';

const SidebarChat = ({ name, id, handleChooseChannel }) => {
  const userAvatar = null;

  const { activeChatId } = useSelector((state) => state.chatReducer);
  useEffect(() => {
    console.log(userAvatar);
  }, []);
  return (
    <li
      className={`sidebarChat ${activeChatId === id ? 'sidebarChat__active' : ''}`}
      onClick={handleChooseChannel(id)}
    >
      {userAvatar ? <img src={`./svg/${userAvatar}`} alt="user-avatar" /> : <Avatar />}
      <div className="sidebarchat__info">
        <div className="sidebarchat__title">
          <h2>{name}</h2>
          <p>timeStamp</p>
        </div>
        <p>body</p>
      </div>
    </li>
  );
};

export default SidebarChat;
