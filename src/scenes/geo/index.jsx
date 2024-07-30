import { Box } from "@mui/material";
import Geography from "../../components/Geography";
import Headers from "../../components/Headers";

import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Geo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px 20px 0 20px">
            <Headers title="GEOPLOT" subtitle="Your stats with geo plot" />
            <Box height="70vh" border={`1px solid ${colors.grey[100]}`}>
                <Geography />
            </Box>
        </Box>
    );
};

export default Geo;
