import {
  Alert,
  Box,
  Button,
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

  const activeAccountsCount = accounts.filter(
    (account) =>
      account.type === "StandardTradingAccount" &&
      account.active &&
      !account.demo
  ).length;

  const handleAddAccountCard = () => {
    if (activeAccountsCount < 5) {
      setModalOpen(true);
    } else {
      setNotificationOpen(true);
    }
  };

  const handleAddButtonModal = () => {
    setAccounts([...accounts]);
    setModalOpen(false);
    console.log("Add new account");
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
            onAddClick={handleAddAccountCard}
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
          New accounts can only be added if the number of active accounts is
          less than 5.
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
          <Typography variant="h6" component="h2" gutterBottom>
            Add a new account
          </Typography>
          <Typography>
            The modal window for creating a new account will be here...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAddButtonModal()}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};
