import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Headers = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                display="flex-column"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{
                        mb: "5px",
                    }}
                >
                    {title}
                </Typography>

                <Typography variant="h6" color={colors.greenAccent[400]}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );
};

export default Headers;
