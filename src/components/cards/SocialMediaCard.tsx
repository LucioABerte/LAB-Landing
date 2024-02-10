import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { WhatsApp, YouTube } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';


const SocialMediaCard: React.FC = () => {

    const iconStyle = {
        color: "#ffdf2b",
    };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "50px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
        <Tooltip title="Whatsapp" placement="left" arrow>
            <IconButton href="https://wa.me/5492233479633" sx={{ "&:hover": { transform: "scale(1.1)" } }}>
                <WhatsApp style={iconStyle}/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Instagram" placement="left" arrow>
            <IconButton href="https://www.instagram.com/lab.homestudio/" sx={{ "&:hover": { transform: "scale(1.1)" } }}>
                <InstagramIcon style={iconStyle}/>
            </IconButton>
        </Tooltip>
        <Tooltip title="TikTok" placement="left" arrow>
            <IconButton href="https://www.tiktok.com/@labhomestudio?_t=8jkSSffE8Wc&_r=1" sx={{ "&:hover": { transform: "scale(1.1)" } }}>
                <FontAwesomeIcon icon={faTiktok} style={iconStyle}/>  
            </IconButton>
        </Tooltip>
        <Tooltip title="Youtube" placement="left" arrow>
            <IconButton href="https://www.youtube.com/playlist?list=PLG2snRm3v-mY237tgYpcvKecFTd697RXq" sx={{ "&:hover": { transform: "scale(1.1)" } }}>
                <YouTube style={iconStyle}/>
            </IconButton>
        </Tooltip>
    </div>
  );
};

export default SocialMediaCard;