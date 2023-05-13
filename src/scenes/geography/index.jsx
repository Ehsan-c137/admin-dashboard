import { useTheme } from "@emotion/react";
import { tokens } from "../../Theme";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Geography = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Box m="20px">
         <Header title="Geography Chart" subtitle="Simple Geography Chart">
            <Box
               height="75vh"
               border={`1px solid ${colors.grey[100]}`}
               borderRadius="6px"
            >
               <GeographyChart />
            </Box>
         </Header>
      </Box>
   );
};

export default Geography;
