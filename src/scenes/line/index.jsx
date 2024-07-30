import { Box } from "@mui/material";
import LinePlot from "../../components/LinePlot";
import Headers from "../../components/Headers";

const Line = () => {
    return (
        <Box m="20px 20px 0 20px">
            <Headers title="LINEPLOT" subtitle="Your stats with line plot" />
            <Box height="70vh">
                <LinePlot />
            </Box>
        </Box>
    );
};

export default Line;
