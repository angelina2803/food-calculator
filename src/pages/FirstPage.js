import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import '../styles/FirstPage.css'
import { Link } from 'react-router-dom';

function FirstPage() {
  return (
    <div>
      <Box>
        <Modal
          className="boxModal"
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          sx={{
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Box
            className="boxForm"
            sx={{
              position: "relative",
              width: '700px',
              height: "450px",
              bgcolor: "white",
              p: 7,
              opacity: '0.7',
              justifyContent:"center"
              
            }}
          >
            <Typography id="server-modal-title" variant="h5">
              Vítejte v CalorieTracker!
            </Typography>
            <Typography component="h3" 
              className="boxText"
              id="server-modal-description"
              sx={{ pt: 4}}
            >
              Jsme rádi, že vás vítáme v naší pohodlné aplikaci pro výpočet
              svedených kalorií. Zde budete moci snadno sledovat a kontrolovat
              svůj jídelníček, abyste dosáhli svých zdravých cílů.
            </Typography>

            <Typography
              className="boxText"
              id="server-modal-description"
              sx={{ pt: 3 }}
            >
              S CalorieTracker budete moci zaznamenávat veškeré jídlo a také
              získávat podrobné informace o spotřebovaných kaloriích. Naše
              databáze obsahuje široký výběr potravin a můžete také přidávat
              vlastní potraviny pro přesnější zobrazení vašich stravovacích
              návyků.
            </Typography>
            <Link to="/calculateForm-page">
            <button  className="boxButton">Příhlasit</button>
            </Link>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default FirstPage;
