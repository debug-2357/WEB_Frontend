import React from 'react';
import styles from '../public/css/recruit.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInUpVariants, defaultFadeInLeftVariants } from './motion';
import { Button } from '@mui/material';

const Recruit = () => {
  return (
    <div className={styles.Wrap}>
      <motion.h1 className={styles.title} initial="initial" whileInView="animate" variants={defaultFadeInUpVariants}>
        Debug
      </motion.h1>
      <motion.h1 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
        디버그는 성공회대학교 내 유일한 <span className={styles.highlight}>정보 보안 동아리</span>입니다.
      </motion.h1>
      <motion.span initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
        공부에 집중할 수 있는 랩실과 미래를 위한 보다 폭넓은 지식
      </motion.span>
      <motion.span initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}></motion.span>
      <div>
        <motion.h3 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
          디버그와 함께할 <span className={styles.highlight}>인재</span>인 여러분의 지원을 기다립니다.
        </motion.h3>
        <Button variant="outlined">지원모집 확인</Button>
      </div>
    </div>
  );
};

export default Recruit;
