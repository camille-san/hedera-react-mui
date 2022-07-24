import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import { styled } from "@mui/material/styles";
import { NoEncryption } from "@mui/icons-material";

export const Navbar = () => {
  const NavButton = styled(Button)({
    backgroundColor: "hedera",
    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      //   backgroundColor: "#0069d9",
      //   borderColor: "#0062cc",
      color: "#fff",
      boxShadow: "none",
    },
    // "&:active": {
    //   boxShadow: "none",
    //   backgroundColor: "#0062cc",
    //   borderColor: "#005cbf",
    // },
    // "&:focus": {
    //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    // },
  });

  return (
    <AppBar color="transparent" position="static">
      <Toolbar variant="dense">
        <Avatar
          src="/leaf.png"
          variant="square"
          sx={{ width: 30, height: 30, marginRight: 1 }}
        />
        <Typography variant="h6" color="hedera" href="/" mr={2}>
          Hedera
        </Typography>
        <Stack direction="row" justifyContent="end">
          <Box justifyContent="flex-end">
            <NavButton
              variant="contained"
              href="/incomes"
              color="hedera"
              size="small"
              startIcon={<TrendingUpRoundedIcon />}
              sx={{
                fontWeight: 900,
                marginRight: 1,
              }}
            >
              Incomes
            </NavButton>
            <NavButton
              variant="contained"
              href="/expenses"
              color="hedera"
              size="small"
              startIcon={<TrendingDownRoundedIcon />}
              sx={{
                fontWeight: 900,
                marginRight: 1,
              }}
            >
              Expenses
            </NavButton>
            <NavButton
              variant="contained"
              href="/reports"
              color="hedera"
              size="small"
              startIcon={<QueryStatsRoundedIcon />}
              sx={{
                fontWeight: 900,
                marginRight: 1,
              }}
            >
              Reports
            </NavButton>
          </Box>
          <Box>
            <IconButton size="small" color="hedera" href="/login">
              <AccountCircle />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
