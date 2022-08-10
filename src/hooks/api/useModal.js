import React, { useState } from 'react';

function useModal() {
  const [modal, setModal] = useState(false);

  // 전역관리 필요
  const changeModal = () => {
    setModal((modal) => !modal);
    alert(`modal condition : ${modal}`);
  };

  return { modal, changeModal };
}

export default useModal;
