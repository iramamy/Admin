import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";
import Headers from "../../components/Headers";

const Pie = () => {
    return (
        <Box m="20px 20px 0 20px">
            <Headers title="PIECHART" subtitle="Your stats with pie chart" />
            <Box height="70vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;
