import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";  

// Custom
import Headers from "../../components/Headers";
import { tokens } from "../../theme";

import { mockDataContacts } from "../../Data/MockData";

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
        },
        {
            field: "registrarId",
            headerName: "RegistrarId"
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
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zipcode",
            flex: 1,
        },
    ];

    return (
        <Box>
            <Headers title="CONTACT" subtitle="Our Contact" />
            <Box
                m="40px 0 0 0"
                height="69vh"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: "none"
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: "none"
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[400]
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    " & .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }
                }}
            >
                <DataGrid
                    rows={ mockDataContacts }
                    columns={ columns }
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Contact;
