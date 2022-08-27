import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../public/css/adminrecruit.module.css';
import { motion } from 'framer-motion';
import { defaultFadeInLeftVariants } from './motion';

const AdminRecruit = () => {
  const dummy2 = [
    {
      id: 1,
      user: {
        userId: 'test',
        username: 'test_name',
        email: 'test@gmail.com',
        profileImageUrl: 'url',
        role: 'ROLE_UNCONFIRMED',
      },
      recruitPeriod: {
        id: 3,
        yearOf: '3기',
        startDate: '2022-08-20 14:57:07',
        endDate: '2022-09-03 14:57:07',
        questions: ['3기 질문1', '3기 질문2', '3기 질문3'],
      },
      content: {
        '3기 질문1': '답변1',
        '3기 질문2': '답변2',
        '3기 질문3': '답변3',
      },
      isPass: '검토중',
      createdDate: '2022-08-27 14:57:07',
      modifiedDate: '2022-08-27 14:57:07',
    },
  ];

  return (
    <div className={styles.Wrap}>
      <h2 className={styles.MainTitle}>지원서 확인</h2>
      {dummy2.map((v) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            {v.user.username}
            <span className={styles.NameSub}>[{v.recruitPeriod.yearOf}]</span>
          </AccordionSummary>
          {v.recruitPeriod.questions.map((v2) => (
            <motion.div initial="initial" whileInView="animate" variants={defaultFadeInLeftVariants}>
              <AccordionDetails key={v2}>
                <div className={styles.Details}>
                  <h3>{v2}</h3>
                  <p>{v.content[v2]}</p>
                  <hr />
                </div>
              </AccordionDetails>
            </motion.div>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default AdminRecruit;
