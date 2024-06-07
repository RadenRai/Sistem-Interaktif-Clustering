import React from "react";
import {
  LocationCity,
  People,
  AccountBalance,
  HealthAndSafety,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetDashboardQuery } from "state/api";
import {
  FlexBetween,
  Header,
  BreakdownChart,
  StatBox,
} from "components";

const Dashboard = () => {
  // theme
  const theme = useTheme();
  // is large desktop screen
  const isNonMediumScreen = useMediaQuery("(min-width: 1200px)");
  // get data
  const { data, isLoading } = useGetDashboardQuery();

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "namaKota",
      headerName: "Nama Kota",
      flex: 0.5,
    },
    {
      field: "namaKelurahan",
      headerName: "Nama Kelurahan",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        {/* Header */}
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreen ? undefined : "span 12",
          },
        }}
      >
        {/* ROW 1 */}
        {/* Total Kota*/}
        <StatBox
          title="Total Kota"
          value={<div style={{ textAlign: 'center' }}>6</div>}
          description=""
          icon={
            <LocationCity
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Total Kelurahan*/}
        <StatBox
          title="Total Kelurahan"
          value={<div style={{ textAlign: 'center' }}>267</div>}
          description=""
          icon={
            <AccountBalance
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Total Penduduk */}
        <StatBox
          title="Total Penduduk"
          value={<div style={{ textAlign: 'center' }}>10.679.951</div>}
          description=""
          icon={
            <People
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Rata-Rata Sembuh Cluster 0*/}
        <StatBox
          title="Cluster 0"
          value={<div style={{ textAlign: 'center' }}>0.20</div>}
          description="Rata-Rata Sembuh"
          icon={
            <HealthAndSafety
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Rata-Rata Sembuh Cluster 1*/}
        <StatBox
          title="Cluster 1"
          value={<div style={{ textAlign: 'center' }}>0.75</div>}
          description="Rata-Rata Sembuh"
          icon={
            <HealthAndSafety
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Rata-Rata Sembuh Cluster 2*/}
        <StatBox
          title="Cluster 2"
          value={<div style={{ textAlign: 'center' }}>0.44</div>}
          description="Rata-Rata Sembuh"
          icon={
            <HealthAndSafety
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        {/* Tabel Hasil Clustering */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButtom-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
            rowCount={(data && data.total) || 267}
            rowsPerPageOptions={[10, 50, 100]}
          />
        </Box>

        {/* Sales by Category */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Grafik Pie Rata-Rata Sembuh Berdasarkan Cluster
          </Typography>

          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="1rem"
            sx={{
              color: theme.palette.secondary[200],
            }}
          >
            Grafik diatas menunjukkan hasil evaluasi dari metode K-Means untuk menghitung Rata-Rata Sembuh berdasarkan Cluster
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
