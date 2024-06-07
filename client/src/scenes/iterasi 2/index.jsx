import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import {
  HealthAndSafetyOutlined,
  CloseOutlined,
  Coronavirus,
  DataArrayOutlined,
} from "@mui/icons-material";

import { useGetTransactionnnsQuery } from "state/api";
import { Header, DataGridCustomToolbar, StatBox } from "components"; // Make sure to import StatBox

// Transactionnns
const Transactionnns = () => {
  // theme
  const theme = useTheme();

  // values for backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  // search
  const [searchInput, setSearchInput] = useState("");

  // Update 'search' whenever 'searchInput' changes
  useEffect(() => {
    setSearch(searchInput);
  }, [searchInput]);

  // get data
  const { data, isLoading } = useGetTransactionnnsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  // data columns
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "no",
      headerName: "No",
      flex: 0.2,
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
    {
      field: "positif",
      headerName: "Positif",
      flex: 0.5,
    },
    {
      field: "sembuh",
      headerName: "Sembuh",
      flex: 0.5,
    },
    {
      field: "meninggal",
      headerName: "Meninggal",
      flex: 0.5,
    },
    {
      field: "kMeans",
      headerName: "K-Means",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="HASIL ITERASI 2" subtitle="" />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: theme.breakpoints.down("md") ? undefined : "span 12",
          },
        }}
      >
        {/* ROW 1 */}
        {/* Pusat Cluster 0 - Positif*/}
        <StatBox
          title="Positif"
          value={<div style={{ textAlign: 'center' }}>0.19788646</div>}
          description="Pusat Cluster 0"
          icon={
            <Coronavirus
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* Pusat Cluster 0 - Sembuh*/}
        <StatBox
          title="Sembuh"
          value={<div style={{ textAlign: 'center' }}>0.19767175</div>}
          description="Pusat Cluster 0"
          icon={
            <HealthAndSafetyOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Pusat Cluster 0 - Meninggal*/}
        <StatBox
          title="Meninggal"
          value={<div style={{ textAlign: 'center' }}>0.15288625</div>}
          description="Pusat Cluster 0"
          icon={
            <CloseOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* Pusat Cluster 1 - Positif*/}
        <StatBox
          title="Positif"
          value={<div style={{ textAlign: 'center' }}>0.75159668</div>}
          description="Pusat Cluster 1"
          icon={
            <Coronavirus
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* Pusat Cluster 1 - Sembuh*/}
        <StatBox
          title="Sembuh"
          value={<div style={{ textAlign: 'center' }}>0.75106818</div>}
          description="Pusat Cluster 1"
          icon={
            <HealthAndSafetyOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Pusat Cluster 1 - Meninggal*/}
        <StatBox
          title="Meninggal"
          value={<div style={{ textAlign: 'center' }}>0.52202216</div>}
          description="Pusat Cluster 1"
          icon={
            <CloseOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Pusat Cluster 2 - Positif*/}
        <StatBox
          title="Positif"
          value={<div style={{ textAlign: 'center' }}>0.43946154</div>}
          description="Pusat Cluster 2"
          icon={
            <Coronavirus
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* Pusat Cluster 2 - Sembuh*/}
        <StatBox
          title="Sembuh"
          value={<div style={{ textAlign: 'center' }}>0.43883535</div>}
          description="Pusat Cluster 2"
          icon={
            <HealthAndSafetyOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Pusat Cluster 2 - Meninggal*/}
        <StatBox
          title="Meninggal"
          value={<div style={{ textAlign: 'center' }}>0.33052632</div>}
          description="Pusat Cluster 2"
          icon={
            <CloseOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Jumlah Data - Cluster 0*/}
        <StatBox
          title="Cluster 0"
          value={<div style={{ textAlign: 'center' }}>124</div>}
          description="Jumlah Data"
          icon={
            <DataArrayOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        {/* Jumlah Data - Cluster 1*/}
        <StatBox
          title="Cluster 1"
          value={<div style={{ textAlign: 'center' }}>38</div>}
          description="Jumlah Data"
          icon={
            <DataArrayOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* Jumlah Data - Cluster 2*/}
        <StatBox
          title="Cluster 2"
          value={<div style={{ textAlign: 'center' }}>105</div>}
          description="Jumlah Data"
          icon={
            <DataArrayOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>

      {/* Content */}
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {/* Grid Table */}
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactionnns) || []}
          columns={columns}
          rowCount={(data && data.total) || 267}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(newSortModel[0])}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactionnns;
