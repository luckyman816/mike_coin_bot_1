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
      user_id: '',
      username: '',
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
    },
    updateWalletSuccess(state, action){
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
      const response = await axios.post('/wallet/id', { id });
      dispatch(wallet.actions.getWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}

export function insertWallet(user_id: string, username: string) {
  console.log("wallet address---------->", user_id, username);
  return async () => {
    try {
      const response = await axios.post('/wallet/add', {user_id: user_id, username: username});
      dispatch(wallet.actions.addWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateWallet(user_id: string, balance: number, energy: number) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/update/${user_id}`, {balance: balance, energy: energy});
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    }catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  }
}
export function updateEnergy (user_id: string, energy: number) {
  console.log("------>", energy)
  return async () => {
    try {
      const response =  await axios.post(`/wallet/updateEnergy/${user_id}`, {energy: energy});
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    }catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  }
}
