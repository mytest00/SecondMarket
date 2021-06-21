import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const TopbarData = [
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'SignUp',
    path: '/signup',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'SignIn',
    path: '/signin',
    icon: <FaIcons.FaRunning />,
    cName: 'nav-text'
  }
];