import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const columns = [
      { field: "id", headerName: "ID" },

      {
         field: "name",
         headerName: "Name",
         flex: 1,
         cellClassName: "name-column--cell",
      },
      {
         field: "cost",
         headerName: "Cost",
         flex: 1,
         renderCell: (params) => (
            <Typography colors={colors.greenAccent[500]}>
               ${params.row.cost}
            </Typography>
         ),
      },
      {
         field: "date",
         headerName: "Date",
         flex: 1,
      },

      { field: "phone", headerName: "Phone Number", flex: 1 },
      { field: "email", headerName: "Email", flex: 1 },
   ];

   return (
      <Box m="20px">
         <Header title="INVOICES" subtitle="List of Invoice Balances">
            <Box
               m="40px 0px 0px 0px"
               height="75vh"
               width="100%"
               sx={{
                  ".MuiDataGrid-root": {
                     border: "none",
                  },
                  ".MuiDataGrid-footerContainer": {
                     backgroundColor: colors.greenAccent[800],
                  },
                  ".MuiDataGrid-columnHeaders": {
                     backgroundColor: colors.greenAccent[800],
                  },
                  ".MuiCheckbox-root": {
                     color: `${colors.greenAccent[200]} !important`,
                  },
               }}
            >
               <DataGrid
                  checkboxSelection
                  rows={mockDataInvoices}
                  columns={columns}
                  components={GridToolbar}
               />
            </Box>
         </Header>
      </Box>
   );
};

export default Contacts;
