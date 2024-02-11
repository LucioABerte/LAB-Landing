'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Album, Diversity1, GraphicEq, LibraryAdd, SpeakerGroup, Tune } from '@mui/icons-material';
import { useTranslation } from '@/context/TranslationContext';
import { Skeleton, useMediaQuery } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const {t, loadingTranslation} = useTranslation()

  const isSmallScreen = useMediaQuery('(max-width:700px)');


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={` ${isSmallScreen ? "w-[100%]" : "" } w-[90%]`}>
      {loadingTranslation ? (
          <div className='flex items-start justify-start flex-col mr-[16rem]'>
            <Skeleton variant="text" width={850} height={60} animation="wave" />
            <Skeleton variant="text" width={850} height={60} animation="wave" />
            <Skeleton variant="text" width={850} height={60} animation="wave" />
            <Skeleton variant="text" width={850} height={60} animation="wave" />
            <Skeleton variant="text" width={850} height={60} animation="wave" />
          </div>
        ):(
          <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
              sx={{
                backgroundColor: '#1a1a1a',
                '& .MuiTypography-root': {
                  fontFamily: 'League Spartan, sans-serif', 
                  color: '#fcfcfc',
                  fontSize: isSmallScreen ? '18px' : '1.2rem', 
                },
                '& .description': {
                  color: '#808080',
                  fontSize: '1rem', 
                },
              }}
              className='mb-[2px]'
              >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{flexShrink: 0,  display:"flex", gap: isSmallScreen ? "0.5rem" : "1rem", alignItems: "center" }}>
                  <LibraryAdd fontSize={isSmallScreen ? "small" : "inherit"}/> {t("AboutAcc1")}
                </Typography>
              </AccordionSummary>
              <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2'/>
              <AccordionDetails>
                <Typography className="description">
                  {t("AboutAccDesc1")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} 
              sx={{
                backgroundColor: '#1a1a1a',
                '& .MuiTypography-root': {
                  fontFamily: 'League Spartan, sans-serif', 
                  color: '#fcfcfc',
                  fontSize: '1.2rem', 
                },
                '& .description': {
                  color: '#808080',
                  fontSize: '1rem', 
                },
              }}
              className='mb-[2px]'
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                  <Typography sx={{ flexShrink: 0, display: "flex", gap: isSmallScreen ? "0.5rem" : "1rem", alignItems: "center" }}>
                    <Tune/> {t("AboutAcc2")}
                  </Typography>
              </AccordionSummary>
              <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2'/>
              <AccordionDetails>
                <Typography className="description">
                  {t("AboutAccDesc2")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
              sx={{
                backgroundColor: '#1a1a1a',
                '& .MuiTypography-root': {
                  fontFamily: 'League Spartan, sans-serif', 
                  color: '#fcfcfc',
                  fontSize: '1.2rem', 
                },
                '& .description': {
                  color: '#808080',
                  fontSize: '1rem', 
                },
              }}
              className='mb-[2px]'
              >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography sx={{flexShrink: 0, display:"flex", gap: isSmallScreen ? "0.5rem" : "1rem",  alignItems: "center" }}>
                  <GraphicEq /> {t("AboutAcc3")}
                </Typography>
              </AccordionSummary>
              <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2'/>
              <AccordionDetails>
                <Typography className="description">
                  {t("AboutAccDesc3")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
              sx={{
                backgroundColor: '#1a1a1a',
                '& .MuiTypography-root': {
                  fontFamily: 'League Spartan, sans-serif', 
                  color: '#fcfcfc',
                  fontSize: isSmallScreen ? '18px' : '1.2rem', 
                },
                '& .description': {
                  color: '#808080',
                  fontSize: '1rem', 
                },
              }}
              className='mb-[2px]'
              >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{flexShrink: 0,  display:"flex", gap: isSmallScreen ? "0.5rem" : "1rem",  alignItems: "center" }}>
                  <Diversity1 /> {t("AboutAcc4")}
                </Typography>
              </AccordionSummary>
              <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2'/>
              <AccordionDetails>
                <Typography className="description">
                  {t("AboutAccDesc4")}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
              sx={{
                backgroundColor: '#1a1a1a',
                '& .MuiTypography-root': {
                  fontFamily: 'League Spartan, sans-serif', 
                  color: '#fcfcfc',
                  fontSize: '1.2rem', 
                },
                '& .description': {
                  color: '#808080',
                  fontSize: '1rem', 
                },
              }}
              className='mb-[2px]'
              >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography sx={{flexShrink: 0,  display:"flex", gap: isSmallScreen ? "0.5rem" : "1rem",  alignItems: "center" }}>
                  <SpeakerGroup /> {t("AboutAcc5")}
                </Typography>
              </AccordionSummary>
              <hr className='w-[20%] bg-white opacity-[10%] relative left-[40%] right-[40%] mb-2'/>
              <AccordionDetails>
                <Typography className="description"> 
                {t("AboutAccDesc5")}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
        )
      }
    </div>
  );
}