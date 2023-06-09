import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { tokens } from "../../Theme";
import { colorModeContext } from "../../context/Theme";
import { InputBase } from "@mui/material";
import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const colorMode = useContext(colorModeContext);

   return (
      <Box display="flex" justifyContent="space-between" p={2}>
         <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
         >
            <InputBase
               sx={{
                  ml: 2,
                  display: "flex",
                  flex: 1,
               }}
               placeholder="Search"
            />
            <IconButton type="button" sx={{ p: 1 }}>
               <SearchIcon />
            </IconButton>
         </Box>

         <Box display="flex">
            <IconButton onClick={() => colorMode.toggleColorMode()}>
               {theme.palette.mode == "dark" ? (
                  <DarkModeOutlined />
               ) : (
                  <LightModeOutlined />
               )}
            </IconButton>
            <IconButton>
               <NotificationsOutlined />
            </IconButton>
            <IconButton>
               <PersonOutlined />
            </IconButton>
            <IconButton>
               <SettingsOutlined />
            </IconButton>
         </Box>
      </Box>
   );
};

export default Topbar;
