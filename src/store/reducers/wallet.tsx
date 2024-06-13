/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from '../../utils/api';
import { dispatch } from '../index';

// types
import { walletStateProps } from '../../types/wallet';

// ----------------------------------------------------------------------

const initialState: walletStateProps = {
  error: null,
  user: {
      _id: '',
      wallet_address: '',
      balance: 0,
      energy: 0
  },
  users: []
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET USER
    getWalletSuccess(state, action) {
      state.user = action.payload;
    },
    addWalletSuccess(state, action) {
      state.user = action.payload;
    }
  }
});

// Reducer
export default wallet.reducer;

// ----------------------------------------------------------------------

export function getWallet(id: number) {
  return async () => {
    try {
      const response = await axios.post('/api/wallet/id', { id });
      dispatch(wallet.actions.getWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}

export function insertWallet(wallet_address: string) {
  return async () => {
    try {
      const response = await axios.post('/api/wallet/add', {wallet_address: wallet_address});
      dispatch(wallet.actions.addWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
