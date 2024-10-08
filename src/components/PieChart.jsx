import { ResponsivePie } from '@nivo/pie';
import { mockPieData as data } from '../Data/MockData';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
const PieChart = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const plotTheme = {
        axis: {
            domain: {
                line: {
                    stroke: colors.grey[100]
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
            ticks: {
                line: {
                    stroke: colors.grey[100],
                    strokeWidth: 2,
                },
                text: {
                    fill: colors.grey[100],
                },
            },
        },
        legends: {
            text: {
                fill: colors.grey[100],
            },
        },
    }

    return (
        <ResponsivePie
            data={data}
            theme={plotTheme}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: "color",
                modifiers: [["darker", "0"]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.grey[100]}
            arcLinkLabelsDiagonalLength={7}
            arcLinkLabelsStraightLength={23}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0.2}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: '#fffff',
                                itemOpacity: 1
                            }
                        }
                    ]
                },
            ]}
        />
    );
};

export default PieChart;
