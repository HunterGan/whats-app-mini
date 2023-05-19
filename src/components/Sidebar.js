import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { ReactComponent as AvatarImg } from './svg/Avatar.svg';
import { ReactComponent as CommunityImg } from './svg/Community.svg';
import { ReactComponent as ChatImg } from './svg/Chat.svg';
import { ReactComponent as MoreImg } from './svg/More.svg';
import { ReactComponent as Search } from './svg/Search.svg';
import SidebarChat from './SidebarChat';
import { actions } from '../slices/index.js';

const Sidebar = () => {
  const dispatch = useDispatch();
  // const setActiveChannel = (id) => () => dispatch(actions.setActiveChannel(id));
  const handleChooseChannel = (id) => () => {
    dispatch(actions.setActiveChannel({ id }));
  };
  const { chats, activeChatId } = useSelector((state) => state.chatReducer);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <AvatarImg />
        <div className="sidebar_headerRight">
          <CommunityImg />
          <ChatImg />
          <MoreImg />
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <Search />
          <input type="text" placeholder="Search or start new Chat" />
        </div>
      </div>
      <ul className="sidebar_chats">
        {chats && chats.map(({ id, name }) => (
          <SidebarChat
            key={id}
            name={name}
            id={id}
            handleChooseChannel={handleChooseChannel(id)}
            isActive={activeChatId === id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
