import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Icons
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";    

// Custom
import Headers from "../../components/Headers";
import { tokens } from "../../theme";

import { mockDataTeam } from "../../Data/MockData";

const Team = () => {
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
            field: "email",
            headerName: "Email",
            flex: 1,
            cellClassName: "email-column--cell",
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                ? colors.greenAccent[700]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && (
                            <AdminPanelSettingsOutlinedIcon /> 
                        )}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}

                        <Typography
                            color={colors.grey[100]}
                            sx={{
                                ml: "5px",
                            }}
                        ></Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m='20px 20px 0 20px'>
            <Headers title="TEAM" subtitle="Your team" />
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
                    }
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                    initialState={{
                        mockDataTeam,
                        pagination: { paginationModel: { pageSize: 10 } },
                      }}
                    pageSizeOptions={[10, 20, 30, 40]}
                />
            </Box>
        </Box>
    );
};

export default Team;
