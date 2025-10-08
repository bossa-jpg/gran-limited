import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import type React from "react";
import type { AccountCardProps } from "../types";
import { MiniChart } from "./MiniChart";

const cardStyle = {
  minWidth: 300,
  minHeight: 200,
  maxWidth: 300,
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-between",
  "&:last-child": { pb: 2 },
};

const headerTitleStyle = {
  "& .MuiCardHeader-title": {
    fontSize: "16px",
    fontWeight: 600,
  },
};

const bottomBlockStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

export const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const handleReactivationToggle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isActive = event.target.checked;

    if (isActive) {
      // Здесь будет вызов API для реактивации счета
      console.log("Reactivating account:", account.id);
    }
  };

  const renderCardContent = () => {
    switch (account.type) {
      case "AppTradingAccount":
        return (
          <Card sx={cardStyle}>
            <CardHeader
              title="AppTradingAccount"
              sx={{
                ...headerTitleStyle,
                bgcolor: "#6b7db8",
                color: "white",
              }}
            />
            <CardContent sx={cardContentStyle}>
              <Typography variant="body1">
                Balance: {account.balance} {account.currency.toLowerCase()}
              </Typography>
              <Box sx={bottomBlockStyle}>
                <IconButton color="inherit" size="medium">
                  <PhoneIphoneOutlinedIcon fontSize="large" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        );

      case "StandardTradingAccount":
        // Demo
        if (account.demo) {
          return (
            <Card sx={cardStyle}>
              <CardHeader
                title={`DEMO - ${account.id}`}
                action={<Typography>{account.currency}</Typography>}
                sx={{
                  ...headerTitleStyle,
                  bgcolor: "#40e0d0",
                  color: "black",
                }}
              />
              <CardContent sx={cardContentStyle}>
                <Stack spacing={1}>
                  <Typography variant="body1">
                    Equity: {account.equity} {account.currency.toLowerCase()}
                  </Typography>
                  <Typography variant="body1">
                    Leverage: {account.leverage}
                  </Typography>
                </Stack>
                <Box sx={bottomBlockStyle}>
                  <MiniChart data={account.data} />
                </Box>
              </CardContent>
            </Card>
          );
        }
        // Неактивный счет
        if (!account.active) {
          return (
            <Card sx={cardStyle}>
              <CardHeader
                avatar={<NotInterestedOutlinedIcon />}
                title={account.id}
                action={
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {account.currency}
                  </Typography>
                }
                sx={{
                  ...headerTitleStyle,
                  bgcolor: "#b19cd9",
                  color: "white",
                }}
              />
              <CardContent sx={cardContentStyle}>
                <Typography variant="body1">Deactivated</Typography>
                <Box sx={bottomBlockStyle}>
                  <Switch onChange={handleReactivationToggle} />
                </Box>
              </CardContent>
            </Card>
          );
        }
        // Активный счет
        return (
          <Card sx={cardStyle}>
            <CardHeader
              title={account.id}
              action={
                <Typography variant="body1" sx={{ color: "black" }}>
                  {account.currency}
                </Typography>
              }
              sx={{
                ...headerTitleStyle,
                bgcolor: "#87ceeb",
                color: "black",
              }}
            />
            <CardContent sx={cardContentStyle}>
              <Stack spacing={1}>
                <Typography variant="body1">
                  Equity - {account.equity} {account.currency}
                </Typography>
                <Typography variant="body1">
                  Leverage: {account.leverage}
                </Typography>
              </Stack>
              <Box
                sx={{
                  ...bottomBlockStyle,
                  justifyContent: "space-between",
                }}
              >
                <IconButton color="inherit" size="medium">
                  <AccountBalanceWalletOutlinedIcon fontSize="large" />
                </IconButton>
                <MiniChart data={account.data} />
              </Box>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };
  return renderCardContent();
};
