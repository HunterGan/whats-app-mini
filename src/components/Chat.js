import React, { useState } from 'react';
import './Chat.css';
import { ReactComponent as Avatar } from './svg/Avatar.svg';
import { ReactComponent as Search } from './svg/Search.svg';
import { ReactComponent as MoreImg } from './svg/More.svg';
import { ReactComponent as InsertEmoj } from './svg/InsertEmoj.svg';
import { ReactComponent as Send } from './svg/Send.svg';
import { ReactComponent as Clip } from './svg/Clip.svg';

const Chat = () => {
  const [input, setInput] = useState('');
  const messages = [
    {
      id: 1,
      received: false,
      name: 'fedor',
      message: 'Privet, Vasiliy',
      timestamp: '01:20:30',
    },
    {
      id: 2,
      received: true,
      name: 'Vasiliy',
      message: 'Privet, fedor, dorogoy drug',
      timestamp: '01:22:30',
    },
  ];
  const sendMessage = async (e) => {
    e.preventDefault();

    // await axios.post('/messages/new', {

    //   message: input,
    //   name: 'siwani',
    //   timestamp: 'just now',
    //   received: true,
    // });
    // setInput(' ');
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar cursor="pointer" />
        <div className="chat_headerInput">
          <h3>Room name</h3>
          <p>Last seen at..</p>
        </div>
        <div className="chat_headerRight">
          <Search />
          <MoreImg />
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p key={message.id} className={`chat_message ${message.received && 'chat_reciever'}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">
              {message.timestamp}
            </span>
          </p>
        ))}

      </div>

      <div className="chat_footer">
        <InsertEmoj cursor="pointer" title="dfdf" />
        <Clip />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message "
            type="text"
          />
          <button
            className="button__icon"
            onClick={sendMessage}
            type="submit"
          >
            <Send />
          </button>
        </form>
      </div>

    </div>
  );
};

export default Chat;
