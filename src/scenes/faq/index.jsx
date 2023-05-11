import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";

import { AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";
import { tokens } from "../../Theme";

const FAQ = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   return (
      <Box m="20px">
         <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question 1
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  omnis consectetur expedita non dolorem minus veniam debitis,
                  eligendi optio ipsam?
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question 2
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  omnis consectetur expedita non dolorem minus veniam debitis,
                  eligendi optio ipsam?
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question 3
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  omnis consectetur expedita non dolorem minus veniam debitis,
                  eligendi optio ipsam?
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
               <Typography color={colors.greenAccent[500]} variant="h5">
                  An Importan question 4
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  omnis consectetur expedita non dolorem minus veniam debitis,
                  eligendi optio ipsam?
               </Typography>
            </AccordionDetails>
         </Accordion>
      </Box>
   );
};

export default FAQ;
