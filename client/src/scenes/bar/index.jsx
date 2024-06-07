import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";
import { Header } from "components";

const BarChartPage = () => {
  const data = [
    {
      "country": "Klaster 0 - Positif",
      "Klaster 0 - Positif": 0.19,
      "Klaster 0 - PositifColor": "hsl(5, 70%, 50%)",
    },
    {
      "country": "Klaster 0 - Sembuh",
      "Klaster 0 - Sembuh": 0.19,
      "Klaster 0 - SembuhColor": "hsl(15, 70%, 50%)",
    },
    {
      "country": "Klaster 0 - Meninggal",
      "Klaster 0 - Meninggal": 0.15,
      "Klaster 0 - MeninggalColor": "hsl(25, 70%, 50%)",
    },
    {
      "country": "Klaster 2 - Positif",
      "Klaster 2 - Positif": 0.43,
      "Klaster 2 - PositifColor": "hsl(65, 70%, 50%)",
    },
    {
      "country": "Klaster 2 - Sembuh",
      "Klaster 2 - Sembuh": 0.43,
      "Klaster 2 - SembuhColor": "hsl(75, 70%, 50%)",
    },
    {
      "country": "Klaster 2 - Meninggal",
      "Klaster 2 - Meninggal": 0.33,
      "Klaster 2 - MeninggalColor": "hsl(85, 70%, 50%)",
    },
    {
      "country": "Klaster 1 - Positif",
      "Klaster 1 - Positif": 0.75,
      "Klaster 1 - PositifColor": "hsl(35, 70%, 50%)",
    },
    {
      "country": "Klaster 1 - Sembuh",
      "Klaster 1 - Sembuh": 0.75,
      "Klaster 1 - SembuhColor": "hsl(45, 70%, 50%)",
    },
    {
      "country": "Klaster 1 - Meninggal",
      "Klaster 1 - Meninggal": 0.52,
      "Klaster 1 - MeninggalColor": "hsl(55, 70%, 50%)",
    }
  ];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="PERBANDINGAN HASIL CLUSTER" subtitle="Pada Ketegori Positif, Sembuh, Meninggal" />

      <Box height="600px" width="100%">
        <ResponsiveBar
          data={data}
          keys={[
            "Klaster 1 - Positif",
            "Klaster 1 - Sembuh",
            "Klaster 1 - Meninggal",
            "Klaster 0 - Positif",
            "Klaster 0 - Sembuh",
            "Klaster 0 - Meninggal",
            "Klaster 2 - Positif",
            "Klaster 2 - Sembuh",
            "Klaster 2 - Meninggal"
          ]}
          indexBy="country"
          margin={{ top: 30, right: 160, bottom: 70, left: 50 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 10,
            tickRotation: 14,
            legend: "Kategori Klastering",
            legendPosition: "middle",
            legendOffset: 55,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Nilai Rata-Rata",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          legends={[
            {
              dataFrom: "keys",
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: '#ffffff',
                  fontWeight: 'bold'
                }
              },
              legend: {
                text: {
                  fill: '#ffffff',
                  fontWeight: 'bold'
                }
              }
            },
            legends: { 
              text: { 
                fill: '#ffffff',
                fontWeight: 'bold'
              } 
            },
            labels: {
              text: {
                fontWeight: 'bold'
              }
            }
          }}
          enableLabels={true}
          labelTextColor="#000"
        />
      </Box>
    </Box>
  );
};

export default BarChartPage;
