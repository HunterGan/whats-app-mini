/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './Sidebar.css';
import { ReactComponent as Avatar } from './svg/Avatar.svg';

const SidebarChat = ({ name, handleChooseChannel, isActive }) => {
  const userAvatar = null;
  return (
    <li
      className={`sidebarChat ${isActive ? 'sidebarChat__active' : ''}`}
      onClick={handleChooseChannel}
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
