"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Diversity1, GraphicEq, LibraryAdd, SpeakerGroup, Tune } from '@mui/icons-material';
import { useTranslation } from '@/context/TranslationContext';
import { useMediaQuery } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    { id: 'panel1', icon: <LibraryAdd />, title: t('AboutAcc1'), description: t('AboutAccDesc1') },
    { id: 'panel2', icon: <Tune />, title: t('AboutAcc2'), description: t('AboutAccDesc2') },
    { id: 'panel3', icon: <GraphicEq />, title: t('AboutAcc3'), description: t('AboutAccDesc3') },
    { id: 'panel4', icon: <Diversity1 />, title: t('AboutAcc4'), description: t('AboutAccDesc4') },
    { id: 'panel5', icon: <SpeakerGroup />, title: t('AboutAcc5'), description: t('AboutAccDesc5') },
  ];

  return (
    <div className={`${isSmallScreen ? "w-[100%]" : ""} w-[90%]`}>
      {accordionData.map(item => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{
            backgroundColor: '#1a1a1a',
            '& .MuiTypography-root': {
              fontFamily: 'League Spartan, sans-serif',
              color: '#fcfcfc',
              fontSize: isSmallScreen ? '15px' : '1.2rem',
            },
            '& .description': {
              color: '#808080',
              fontSize: '1rem',
            },
          }}
          className='mb-[2px]'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
          >
            <Typography sx={{ flexShrink: 0, display: "flex", gap: isSmallScreen ? "0.5rem" : "1rem", alignItems: "center" }}>
              {item.icon} {item.title}
            </Typography>
          </AccordionSummary>
          <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2' />
          <AccordionDetails>
            <Typography className="description">
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}