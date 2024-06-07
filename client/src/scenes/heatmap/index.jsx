import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { Box } from "@mui/material";
import { Header } from "components";

// Heatmap data
const heatmapData = [
  {
    id: "positif",
    data: [
      { x: "positif", y: 1 },
      { x: "sembuh", y: 1 },
      { x: "meninggal", y: 0.87 },
    ],
  },
  {
    id: "sembuh",
    data: [
      { x: "positif", y: 1 },
      { x: "sembuh", y: 1 },
      { x: "meninggal", y: 0.86 },
    ],
  },
  {
    id: "meninggal",
    data: [
      { x: "positif", y: 0.86 },
      { x: "sembuh", y: 0.87 },
      { x: "meninggal", y: 1 },
    ],
  },
];

const HeatmapPage = () => {
  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="GRAFIK HEATMAP" subtitle="Matrik Korelasi" />

      <Box height="600px" width="100%">
        {/* make sure parent container has a defined height when using responsive component */}
        <ResponsiveHeatMap
          data={heatmapData}
          keys={['y']}
          indexBy="x"
          margin={{ top: 60, right: 90, bottom: 60, left: 120 }}
          valueFormat=".2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 46,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: -40,
          }}
          colors={{
            type: "diverging",
            scheme: "red_yellow_blue",
            divergeAt: 0.5,
            minValue: 1,
            maxValue: 0.86,
          }}
          emptyColor="#555555"
          legends={[
            {
              anchor: "right",
              translateX: 30,
              translateY: 0,
              length: 400,
              thickness: 8,
              direction: "column",
              tickPosition: "after",
              tickSize: 3,
              tickSpacing: 4,
              tickOverlap: false,
              titleAlign: "start",
              titleOffset: 4,
            },
          ]}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: '#ffffff',
                  fontSize: 20,
                }
              }
            },
            legends: {
              itemTextColor: '#ffffff',
              text: {
                fill: '#ffffff'
              },
              title: {
                fill: '#ffffff'
              }
            },
            grid: {
              line: {
                stroke: '#888888',
                strokeWidth: 1
              }
            },
            cell: {
              label: {
                textColor: '#ffffff',
                fontSize: 24,
              }
            },
            labels: {
              text: {
                fontWeight: 'bold'
              }
            }
          }}
          enableLabels={true}
          labelTextColor="#ffffff"
          tooltip={() => {}}
          />
      </Box>
    </Box>
  );
};

export default HeatmapPage;
