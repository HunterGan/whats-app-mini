import React from 'react';
import './EmptyChatFiller.css';
import { ReactComponent as EmptyChatIcon } from './svg/EmptyChatIcon.svg';

const EmptyChatFiller = ({ children }) => (
  <div className="chat__empty">
    <EmptyChatIcon />
    {children}
  </div>
);

export default EmptyChatFiller;
