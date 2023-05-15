import React, { useEffect } from 'react';
import './Sidebar.css';
import { ReactComponent as Avatar } from './svg/Avatar.svg';

const SidebarChat = ({
  name, body, timeStamp, id,
}) => {
  const userAvatar = null;
  const activeChatId = 1;
  useEffect(() => {
    console.log(userAvatar);
  }, []);
  return (
    <div className={`sidebarChat ${activeChatId === id && 'sidebarChat__active'}`}>
      {userAvatar ? <img src={`./svg/${userAvatar}`} alt="user-avatar" /> : <Avatar />}
      <div className="sidebarchat__info">
        <div className="sidebarchat__title">
          <h2>{name}</h2>
          <p>{timeStamp}</p>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
