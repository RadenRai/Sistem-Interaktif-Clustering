import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  TableViewOutlined,
  TableChartOutlined,
  BarChartOutlined,
  PieChartOutlined,
  DonutLargeOutlined,
  LiveHelpOutlined,
} from "@mui/icons-material";

import { FlexBetween } from ".";

// Nav items
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "EDA",
    icon: null,
  },
  {
    text: "Donut",
    icon: <DonutLargeOutlined />,
  },
  {
    text: "Heatmap",
    icon: <TableChartOutlined />,
  },
  {
    text: "ITERASI",
    icon: null,
  },
  {
    text: "Iterasi 1",
    icon: <TableViewOutlined />,
  },
  {
    text: "Iterasi 2",
    icon: <TableViewOutlined />,
  },
  {
    text: "Iterasi 3",
    icon: <TableViewOutlined />,
  },
  {
    text: "EVALUASI HASIL",
    icon: null,
  },
  {
    text: "Bar",
    icon: <BarChartOutlined />,
  },
  {
    text: "Pie",
    icon: <PieChartOutlined />,
  },
  {
    text: "Heatmap",
    icon: <TableChartOutlined />,
  },
  {
    text: "FAQ",
    icon: null,
  },
  {
    text: "FAQ",
    icon: <LiveHelpOutlined />,
  }
];

// Sidebar
const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  // config
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  // set active path
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        // Sidebar
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
            "& .MuiDrawer-paper::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <Box width="100%">
            {/* Brand Info */}
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    onClick={() => {
                      navigate("/dashboard");
                      setActive("dashboard");
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                    title="ECOMVISION"
                  >
                    PROJECT IT 2
                  </Typography>
                </Box>
                {/* Mobile Sidebar Toggle Icon */}
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    title="Close Sidebar"
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            {/* Sidebar items */}
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                // lowercase text
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} title={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      {/* icon */}
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      {/* text */}
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
