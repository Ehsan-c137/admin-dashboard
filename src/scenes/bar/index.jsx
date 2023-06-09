import { Box } from "@mui/material";

import BarChart from "../../components/BarChart";
import Header from "../../components/Header";
const Bar = () => {
   return (
      <Box m="20px">
         <Header title="bar chart" subtitle="some bar chart">
            <Box height="75vh">
               <BarChart />
            </Box>
         </Header>
      </Box>
   );
};

export default Bar;
