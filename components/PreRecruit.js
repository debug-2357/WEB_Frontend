import React from 'react';
import styles from '../public/css/prerecruit.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInUpVariants, defaultFadeInLeftVariants } from './motion';
import { Button, Box } from '@mui/material';

const PreRecruit = () => {
  return (
    <div className={styles.Wrap}>
      <motion.h1 initial="initial" whileInView="animate" variants={defaultFadeInUpVariants}>
        Debug
      </motion.h1>
      <Box className={styles.TextContent}></Box>
      <div className={styles.Bottom}>
        <motion.span initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}></motion.span>
        <div>
          <motion.h3 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
            디버그와 함께할 <span className={styles.highlight}>인재</span>의 지원을 기다립니다.
          </motion.h3>
          <Button className={styles.Bottombutton} variant="outlined">
            지원모집 확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreRecruit;
