import { ResponsiveLine } from '@nivo/line'


// Custom
import { mockLineData as data } from "../Data/MockData";
import { tokens } from '../theme';
import { useTheme } from '@mui/material';


const LinePlot = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const plotTheme = {
        axis: {
            domain: {
                line: {
                    stroke: colors.grey[100],
                },
            },
            legend: {
                text: {
                    fill: colors.grey[100],
                },
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
        tooltip: {
            container: {
                color: colors.primary[500]
            }
        }
    };

  return (
    <ResponsiveLine
        data={data}
        theme={plotTheme}
        colors={isDashboard ? {datum:'color'} : {scheme: 'nivo'}}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickValues: isDashboard ? 2 : 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: '#fffff',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LinePlot