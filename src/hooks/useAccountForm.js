import { useState } from 'react';
import { api } from '../services/api';

const initialFormState = {
  account_number: '',
  account_name: '',
  iban: '',
  address: '',
  amount: '',
  type: 'sending'
};

export const useAccountForm = (onAccountAdded) => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/account', {
        ...formData,
        amount: parseFloat(formData.amount),
      });
      setSuccess(true);
      setError(null);
      setFormData(initialFormState);
      onAccountAdded();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account');
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    error,
    success,
    handleSubmit,
    handleChange
  };
};