import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import { BreakdownnChart } from "components";

const Breakdownn = () => {
  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="GRAFIK DONUT" subtitle="Jumlah Kasus Covid-19 di DKI Jakarta" />

      {/* Content */}
      <Box mt="40px" height="75vh">
        {/* chart */}
        <BreakdownnChart />
      </Box>
    </Box>
  );
};

export default Breakdownn;
