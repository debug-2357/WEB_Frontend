import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../public/css/adminrecruit.module.css';

const AdminRecruit = () => {
  return (
    <div className={styles.Wrap}>
      <h2>지원서 확인</h2>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          이름 1
        </AccordionSummary>
        <AccordionDetails>내용</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          이름 1
        </AccordionSummary>
        <AccordionDetails>내용</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          이름 1
        </AccordionSummary>
        <AccordionDetails>내용</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AdminRecruit;
