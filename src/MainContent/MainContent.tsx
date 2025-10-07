import {
  Alert,
  Box,
  Container,
  Grid,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { mockAccounts } from "../MockData/mock";
import { AccountCard, AddAccountCard } from "./AccountCard";

export const MainContent: React.FC = () => {
  const [accounts, setAccounts] = useState(mockAccounts);
  const [isModalOpen, setModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const test = setAccounts;
  console.log(test);
  const activeAccountsCount = accounts.filter(
    (account) =>
      account.type === "StandardTradingAccount" &&
      account.active &&
      !account.demo
  ).length;

  const handleAddAccountClick = () => {
    if (activeAccountsCount < 5) {
      setModalOpen(true);
    } else {
      setNotificationOpen(true);
    }
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "20px",
          minHeight: "calc(100vh - 200px)",
          alignItems: "flex-start",
        }}
      >
        {accounts.map((account) => (
          <Grid
            key={`${account.type}-${account.id}`}
            size={{ xs: 24, sm: 12, md: 6, lg: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <AccountCard account={account} />
          </Grid>
        ))}

        <Grid
          size={{ xs: 24, sm: 12, md: 6, lg: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <AddAccountCard
            activeAccountsCount={activeAccountsCount}
            onAddClick={handleAddAccountClick}
          />
        </Grid>
      </Grid>

      <Snackbar
        open={notificationOpen}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Добавлять новые счета можно только при количестве активных счетов
          меньше 5
        </Alert>
      </Snackbar>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Здесь будет содержимое модального окна */}
          <Typography variant="h6" component="h2" gutterBottom>
            Добавление нового счета
          </Typography>
          <Typography>
            Модальное окно для создания нового счета будет здесь...
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};
