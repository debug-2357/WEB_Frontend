import React, { useState } from 'react';
import section from '../public/css/section.module.css';
import useModal from '../src/hooks/api/useModal.js';
import Modal from '../components/Modal.js';

function Section() {
  const { modal, changeModal } = useModal();

  return (
    <section className={section.section}>
      <div className={section.intro}>
        <h1 className={section.title}>Debug</h1>
        <button className={section.button}>미정</button>
      </div>
      <span className={section.titleText}>성공회대학교 웹 보안 동아리</span>
      <div className={section.main}>
        <h1>
          디버그는 성공회대학교 내 유일한 <span className={section.highlight}>웹 보안 동아리</span>입니다
        </h1>
        <div className={section.mainSub}>
          <h3>디버그와 함께할 인재를 구합니다</h3>
          <button onClick={changeModal}>지원 모집 확인</button>
        </div>
      </div>
      {modal ? <Modal /> : null}
    </section>
  );
}

export default Section;
