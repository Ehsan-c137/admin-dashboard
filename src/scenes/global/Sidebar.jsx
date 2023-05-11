import { useState } from "react";
import {
   Sidebar as ProSidebar,
   useProSidebar,
   Menu,
   MenuItem,
   SubMenu,
} from "react-pro-sidebar";
import avatarDark from "../../assets/avatar_dark.svg";
import avatarLight from "../../assets/avatar_light.svg";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import {
   HomeOutlined,
   PeopleOutlined,
   ContactsOutlined,
   ReceiptOutlined,
   PersonOutlined,
   CalendarToday,
   HelpOutlineOutlined,
   BarChartOutlined,
   PieChartOutlineOutlined,
   TimelineOutlined,
   MenuOutlined,
   MapOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <MenuItem
         active={selected === title}
         style={{ color: colors.grey[100] }}
         onClick={() => setSelected(title)}
         icon={icon}
         component={<Link to={to} />}
      >
         <Typography>{title}</Typography>
      </MenuItem>
   );
};
const Sidebar = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const { collapseSidebar } = useProSidebar();
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [selected, setSelected] = useState("Dashboard");

   const handleCollapsed = () => {
      setIsCollapsed(!isCollapsed);
      collapseSidebar();
   };

   return (
      <Box
         sx={{
            ".ps-menu-button:hover": {
               backgroundColor: `transparent !important`,
               color: `${colors.greenAccent[400]} !important`,
            },
            ".ps-menu-button": {
               transition: "400ms color",
            },
            overflowY: "scroll",
            overflowX: "hidden",
         }}
         height="100vh"
         position="sticky"
      >
         <ProSidebar backgroundColor={colors.primary[400]}>
            <Menu>
               {/* LOGO AND MENU ICON */}
               <MenuItem
                  onClick={() => handleCollapsed()}
                  icon={<MenuOutlined />}
                  style={{
                     margin: "10px 0px 20px 0px",
                  }}
               >
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                     ml="15px"
                  >
                     <Typography variant="h3" color={colors.grey[100]}>
                        Admins
                     </Typography>
                  </Box>
               </MenuItem>

               {!isCollapsed && (
                  <Box mb="25px">
                     <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                     >
                        <img
                           alt="profile-user"
                           width="100px"
                           height="100px"
                           src={
                              theme.palette.mode == "dark"
                                 ? avatarDark
                                 : avatarLight
                           }
                           style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                     </Box>

                     <Box textAlign="center">
                        <Typography
                           variant="h2"
                           color={colors.grey[100]}
                           fontWeight="bold"
                           sx={{ m: "10px 0px 0px 0px" }}
                        >
                           Ehsan Mousavi
                        </Typography>
                        <Typography
                           vairnat="h5"
                           color={colors.greenAccent[500]}
                        >
                           Admin Panel M.
                        </Typography>
                     </Box>
                  </Box>
               )}

               <Box>
                  <Item
                     title="Dashboard"
                     to="/"
                     icon={<HomeOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0px 0px 25px" }}
                  >
                     Data
                  </Typography>
                  <Item
                     title="Manage Team"
                     to="/team"
                     icon={<PeopleOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Contacts"
                     to="/contacts"
                     icon={<ContactsOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Invoices Balance"
                     to="/invoices"
                     icon={<ReceiptOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0px 5px 25px" }}
                  >
                     Pages
                  </Typography>
                  <Item
                     title="Profile Form"
                     to="/form"
                     icon={<PersonOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Calendar"
                     to="/calendar"
                     icon={<CalendarToday />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="FAQ Page"
                     to="/faq"
                     icon={<HelpOutlineOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Typography
                     variant="h6"
                     color={colors.grey[300]}
                     sx={{ m: "15px 0px 5px 25px" }}
                  >
                     Charts
                  </Typography>
                  <Item
                     title="FAQ Page"
                     to="/bar"
                     icon={<BarChartOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Pie Chart"
                     to="/pie"
                     icon={<PieChartOutlineOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Line Chart"
                     to="/line"
                     icon={<TimelineOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
                  <Item
                     title="Geography Chart"
                     to="/geography"
                     icon={<MapOutlined />}
                     selected={selected}
                     setSelected={setSelected}
                  />
               </Box>
            </Menu>
         </ProSidebar>
      </Box>
   );
};

export default Sidebar;
