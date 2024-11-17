import { 
  Container, 
  Typography, 
  Box,
} from '@mui/material';
import AddAccountForm from './components/AddAccountForm';
import AccountsTable from './components/AccountsTable';
import { useAccounts } from './hooks/useAccounts';

function App() {
  const { accounts, loading, error, refetchAccounts } = useAccounts();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ImmuDB Playground - Account Management
        </Typography>

        <AddAccountForm onAccountAdded={refetchAccounts} />

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        <AccountsTable accounts={accounts} loading={loading} />
      </Box>
    </Container>
  );
}

export default App;
