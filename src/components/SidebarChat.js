import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { ReactComponent as Avatar } from './svg/Avatar.svg';

const SidebarChat = ({ name, body, timeStamp }) => {
  const [avt, setavt] = useState('');
  console.log(avt);
  useEffect(() => {
    setavt(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarchat__info">
        <h2>{name}</h2>
        <p>{body}</p>
        <p>{timeStamp}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
