import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
} from '@mui/material';

const AccountsTable = ({ accounts, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account Name</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>IBAN</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.documentId}>
              <TableCell>{account.document.account_name}</TableCell>
              <TableCell>{account.document.account_number}</TableCell>
              <TableCell>{account.document.address}</TableCell>
              <TableCell>{account.document.amount}</TableCell>
              <TableCell>{account.document.iban}</TableCell>
              <TableCell>{account.document.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

AccountsTable.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      documentId: PropTypes.string.isRequired,
      document: PropTypes.shape({
        account_name: PropTypes.string.isRequired,
        account_number: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        iban: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AccountsTable; 