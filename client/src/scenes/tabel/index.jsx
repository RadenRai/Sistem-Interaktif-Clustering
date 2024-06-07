import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";

import { useGetTransactionsQuery } from "state/api";
import { Header, DataGridCustomToolbar } from "components";

// Transactions
const Transactions = () => {
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
  const { data, isLoading } = useGetTransactionsQuery({
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
      <Header title="TABEL HASIL CLUSTERING" subtitle="" />

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
          "& .MuiDataGrid-toolbarContainer .MuiButtom-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {/* Grid Table */}
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
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
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;