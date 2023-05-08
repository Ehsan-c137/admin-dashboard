import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../Theme";

const Header = ({ title, subtitle, children }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   return (
      <Box mb="30px">
         <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0px 0px 5px 0px" }}
         >
            {title}
         </Typography>
         <Typography variant="h5" color={colors.greenAccent[400]}>
            {subtitle}
         </Typography>
         {children}
      </Box>
   );
};

export default Header;
