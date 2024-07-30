import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Headers from "../../components/Headers";

const Bar = () => {
    return (
        <Box m="20px 20px 0 20px">
            <Headers title="BARCHART" subtitle="Your stats" />
            <Box height="70vh">
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;
