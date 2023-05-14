import React from 'react';
import './Sidebar.css';
import { ReactComponent as AvatarImg } from './svg/Avatar.svg';
import { ReactComponent as CommunityImg } from './svg/Community.svg';
import { ReactComponent as ChatImg } from './svg/Chat.svg';
import { ReactComponent as MoreImg } from './svg/More.svg';
import { ReactComponent as Search } from './svg/Search.svg';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  const f = 'p';
  console.log(f);
  const chats = [{
    name: '900',
  },
  {
    name: 'Vasya',
  }];
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
      <div className="sidebar_chats">
        {chats && chats.map(({
          id, name, body, timeStamp,
        }) => (
          <SidebarChat
            key={id}
            name={name}
            body={body}
            timeStamp={timeStamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
