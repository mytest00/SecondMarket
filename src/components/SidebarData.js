import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Electronics',
    path: '/electronics',
    icon: <DiIcons.DiAndroid />,
    cName: 'nav-text'
  },
  {
    title: 'Game',
    path: '/game',
    icon: <GiIcons.GiGamepad />,
    cName: 'nav-text'
  },
  {
    title: 'Furniture',
    path: '/furniture',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Sport',
    path: '/sport',
    icon: <FaIcons.FaRunning />,
    cName: 'nav-text'
  }
];