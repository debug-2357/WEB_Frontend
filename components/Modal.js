import React, { useState } from 'react';
import useModal from '../src/hooks/api/useModal.js';
import Section from '../components/Section';
import modals from '../public/css/modal.module.css';

function Modal() {
  const { modal, setModal, changeModal } = useModal();

  function offModal() {
    alert('새로고침 해주세요. 미완성');
  }

  return (
    <div className={modals.container}>
      <div className={modals.wrapper}>
        <div className={modals.header}>
          <button onClick={offModal}>←</button>
          <h1 className={modals.title}>X기 모집 안내</h1>
        </div>
        <div className={modals.context}>
          <h3>디버그란?</h3>
          <span>공사중</span>
          <h3>운영방식</h3>
          <span>공사중</span>
          <h3>포지션</h3>
          <span>공사중</span>
          <h3>주의 사항</h3>
          <span>공사중</span>
          <h3>선발 일정</h3>
          <span>공사중</span>
          <h3>기타 문의</h3>
          <span>공사중</span>
        </div>
        <div className={modals.footer}>
          {/* 지원 페이지 연결 */}
          <button onClick={changeModal}>지원하러 가기</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
