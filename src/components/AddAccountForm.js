import { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { useAccountForm } from '../hooks/useAccountForm';

function AddAccountForm({ onAccountAdded }) {
  const {
    formData,
    error,
    success,
    handleSubmit,
    handleChange
  } = useAccountForm(onAccountAdded);

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Add New Account
      </Typography>
      
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Account created successfully!
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Account Number"
            name="account_number"
            value={formData.account_number}
            onChange={handleChange}
            required
            placeholder="ABC DEF 123"
          />
          <TextField
            label="Account Name"
            name="account_name"
            value={formData.account_name}
            onChange={handleChange}
            required
          />
          <TextField
            label="IBAN"
            name="iban"
            value={formData.iban}
            onChange={handleChange}
            required
            placeholder="DE89370400440532013000"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <TextField
            select
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="sending">Sending</option>
            <option value="receiving">Receiving</option>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            sx={{ height: 56 }}
          >
            Add Account
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default AddAccountForm; 