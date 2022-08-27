//신청 페이지
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import styles from '../public/css/recruitguest2.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInLeftVariants, defaultFadeInUpVariants } from './motion';
import SendIcon from '@mui/icons-material/Send';

const RecruitGuest2 = () => {
  const dummyData = [
    {
      id: 3,
      yearOf: '3기',
      startDate: '2022-08-20 14:57:07',
      endDate: '2022-09-03 14:57:07',
      questions: ['3기 질문1', '3기 질문2', '3기 질문3'],
    }, // 최근 지원 기간 정보 반환의 data 부분
  ];

  return (
    <div className={styles.Wrap}>
      {dummyData.map(
        (
          v, //map함수 사용을 위한 div 태그 사용
        ) => (
          <div>
            <motion.h2 initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={styles.recruitName}>
              {v.yearOf} 지원서
            </motion.h2>
            <Box component="div" pt={5}>
              <motion.div initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants} className={styles.AnswerWrap}>
                {v.questions.map((v2) => (
                  <div className={styles.AnswerDummyWrap}>
                    <fieldset className={styles.AnswerField}>
                      <div className={styles.questionname}>Q. {v2}</div>
                      <TextField id="filled-full-width" label={v2} fullWidth variant="filled" className={styles.textfield} multiline maxRows={4} />
                    </fieldset>
                  </div>
                ))}
              </motion.div>
            </Box>
          </div>
        ),
      )}
      <motion.div initial="initial" whileInView="animate" variants={defaultFadeInUpVariants} className={styles.RecruitAnswerSubmitWrap}>
        <Button variant="text" size="large" className={styles.RecruitAnswerSubmit} endIcon={<SendIcon />}>
          제출
        </Button>
      </motion.div>
    </div>
  );
};

export default RecruitGuest2;
