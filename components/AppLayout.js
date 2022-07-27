import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <>
      <div className={'HeaderBody'}>헤더영역</div>
      {children}
      <div className={'FooterBody'}>copyrightⓒ2022. debug. All rights reserved.</div>
    </>
  );
};

export default AppLayout;
