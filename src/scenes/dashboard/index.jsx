import Headers from "../../components/Headers";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../Data/MockData";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import LinePlot from "../../components/LinePlot";
import BarChart from "../../components/BarChart";
import Geography from "../../components/Geography";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

import { tokens } from "../../theme";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mr: "20px",
        }}
      >
        <Headers title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              colors: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon
              sx={{
                color: colors.grey[100],
              }}
            />
            <Typography
              sx={{
                color: colors.grey[100],
                ml: "10px",
              }}
            >
              Download
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Main Grid */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="12px"
        m="20px 20px 0 20px"
        height="69vh"
        overflow="scroll"
      >
        {/* ############### Row 1 ############### */}
        {/* Grid 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,123"
            subtitle="Emails sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* Grid 2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="234,910"
            subtitle="Sales"
            progress="0.5"
            increase="+26%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* Grid 3 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="9,901"
            subtitle="Customers"
            progress="0.45"
            increase="+47%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* Grid 4 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,123,012"
            subtitle="Traffic inbound"
            progress="0.85"
            increase="+10%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* ############### Row 2 ############### */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            p="0 30px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="600"
              >
                Revenue generated
              </Typography>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight="500"
              >
                $50,203,11
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    color: colors.greenAccent[500],
                    ml: "10px",
                    fontSize: "26px",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="230px">
            <LinePlot isDashboard={true} />
          </Box>
        </Box>

        {/* transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            p="0 30px"
            alignItems="center"
            justifyContent="space-between"
            borderBottom={`2px solid ${colors.primary[500]}`}
          >
            <Box>
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="600"
              >
                Recent transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, id) => (
              <>
                <Box
                  key={`${transaction.txId}-${id}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py="10px"
                >
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  py="10px"
                  borderBottom={`2px solid ${colors.primary[500]}`}
                >
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
