import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Custom
import Headers from "../../components/Headers";
import { tokens } from "../../theme";

import { mockDataInvoices } from "../../Data/MockData";

const Invoice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            cellClassName: "email-column--cell",
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => {
                return (
                    <Typography color={colors.greenAccent[500]}>
                        ${params.row.cost}
                    </Typography>
                );
            },
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },

        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <Box m='20px 20px 0 20px'>
            <Headers title="Invoice" subtitle="List of Invoices Ballance" />
            <Box
                m="40px 0 0 0"
                height="69vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[500],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    " & .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& MuiCheckBox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    initialState={{
                        mockDataInvoices,
                        pagination: { paginationModel: { pageSize: 10 } },
                      }}
                    pageSizeOptions={[10, 20, 30, 40]}
                />
            </Box>
        </Box>
    );
};

export default Invoice;
