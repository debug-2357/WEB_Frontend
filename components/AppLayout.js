import React from 'react';
import style from '../public/css/applayout.module.css';

const AppLayout = ({ children }) => {
  return (
    <>
      <div className={style.HeaderBody}>헤더영역</div>
      {children}
      <div className={style.FooterBody}>copyrightⓒ2022. debug. All rights reserved.</div>
    </>
  );
};

export default AppLayout;
