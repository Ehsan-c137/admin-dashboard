import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import {
   DownloadOutlined,
   EmailRounded,
   PointOfSaleRounded,
   PersonAdd,
   TrafficOutlined,
} from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

            <Box>
               <Button
                  sx={{
                     backgroundColor: colors.blueAccent[700],
                     color: colors.grey[100],
                     fontSize: "14px",
                     fontWeight: "bold",
                     padding: "10px 20px",
                  }}
               >
                  <DownloadOutlined sx={{ mr: " 10px" }} />
                  Download Reports
               </Button>
            </Box>
         </Box>
         <Box
            display="grid"
            gridTemplateColumns="repeat(12,1fr)"
            gridAutoRows="140px"
            gap="20px"
         >
            {/* row 1 */}
            <Box
               gridColumn="span 3"
               backgroundColor={colors.primary[400]}
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <StatBox
                  title="12,361"
                  subtitle="Emails Sent"
                  progress="0.75"
                  increase="+14%"
                  icon={
                     <EmailRounded
                        sx={{
                           color: colors.greenAccent[600],
                           fontSize: "26px",
                        }}
                     />
                  }
               />
            </Box>

            <Box
               gridColumn="span 3"
               backgroundColor={colors.primary[400]}
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <StatBox
                  title="412,361"
                  subtitle="Sales Obtained "
                  progress="0.5"
                  increase="+14%"
                  icon={
                     <PointOfSaleRounded
                        sx={{
                           color: colors.greenAccent[600],
                           fontSize: "26px",
                        }}
                     />
                  }
               />
            </Box>

            <Box
               gridColumn="span 3"
               backgroundColor={colors.primary[400]}
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <StatBox
                  title="1,132,361"
                  subtitle="Traffic Inbound"
                  progress="0.80"
                  increase="+44%"
                  icon={
                     <TrafficOutlined
                        sx={{
                           color: colors.greenAccent[600],
                           fontSize: "26px",
                        }}
                     />
                  }
               />
            </Box>
            <Box
               gridColumn="span 3"
               backgroundColor={colors.primary[400]}
               display="flex"
               alignItems="center"
               justifyContent="center"
            >
               <StatBox
                  title="32,361"
                  subtitle="New Clients"
                  progress="0.40"
                  increase="+7%"
                  icon={
                     <TrafficOutlined
                        sx={{
                           color: colors.greenAccent[600],
                           fontSize: "26px",
                        }}
                     />
                  }
               />
            </Box>
            {/* row 2  */}

            <Box
               gridColumn="span 8"
               gridRow="span 2"
               backgroundColor={colors.primary[400]}
            >
               <Box>
                  <Box
                     mt="25px"
                     p="0px 30px"
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                  >
                     <Box>
                        <Typography
                           variant="h5"
                           fontWeight="600"
                           color={colors.grey[100]}
                        >
                           Revenue Generated
                        </Typography>
                        <Typography
                           variant="h3"
                           fontWeight="bold"
                           color={colors.greenAccent[100]}
                        >
                           $59,342,32
                        </Typography>
                     </Box>
                     <Box>
                        <IconButton>
                           <DownloadOutlined
                              sx={{
                                 fontSize: "26px",
                                 color: colors.greenAccent[500],
                              }}
                           />
                        </IconButton>
                     </Box>
                  </Box>
               </Box>
               <Box height="250px" mt="-20px">
                  <LineChart isDashboard={true} />
               </Box>
            </Box>
            {/* transactions */}
            <Box
               gridColumn="span 4"
               gridRow="span 2"
               backgroundColor={colors.primary[400]}
               overflow="auto"
            >
               <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  colors={colors.grey[100]}
                  p="15px"
               >
                  <Typography
                     color={colors.grey[100]}
                     variant="h5"
                     fontWeight="600"
                  >
                     Recent Transactions
                  </Typography>
               </Box>
               {mockTransactions.map((transaction, i) => (
                  <Box
                     key={`${transaction.txId}-${i}`}
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                     borderBottom={`4px solid ${colors.primary[500]}`}
                     p="15px"
                  >
                     <Box>
                        <Typography
                           color={colors.greenAccent[500]}
                           variant="h5"
                           fontWeight="600"
                        >
                           {transaction.txId}
                        </Typography>
                        <Typography color={colors.grey[100]}>
                           {transaction.user}
                        </Typography>
                     </Box>
                     <Box color={colors.grey[100]}>{transaction.date}</Box>
                     <Box
                        backgroundColor={colors.greenAccent[500]}
                        p="5px 10px"
                        borderRadius="4px"
                     >
                        ${transaction.cost}
                     </Box>
                  </Box>
               ))}
            </Box>

            {/* ROW 3 */}
            <Box
               gridColumn="span 4"
               gridRow="span 2"
               backgroundColor={colors.primary[400]}
               p="30px"
            >
               <Typography variant="h5" fontWeight="600">
                  Campaign
               </Typography>
               <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mt="25px"
               >
                  <ProgressCircle size="125" />
                  <Typography
                     variant="h5"
                     color={colors.greenAccent[500]}
                     sx={{ mt: "15px" }}
                  >
                     $48,352 revenue generated
                  </Typography>
                  <Typography>Includes extra misc expendit</Typography>
               </Box>
            </Box>
            <Box
               gridColumn="span 4"
               gridRow="span 2"
               backgroundColor={colors.primary[400]}
               p="30px"
            >
               <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                  Geography Based Traffic
               </Typography>
               <Box height="200px" mt="20px">
                  <BarChart />
               </Box>
            </Box>

            {/*  */}
            <Box
               gridColumn="span 4"
               gridRow="span 2"
               backgroundColor={colors.primary[400]}
               p="30px"
            >
               <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                  Geography Based Traffic
               </Typography>
               <Box height="200px" mt="20px">
                  <GeographyChart />
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default Dashboard;
