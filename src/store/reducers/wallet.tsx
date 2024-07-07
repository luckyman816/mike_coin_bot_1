import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/api";
import { dispatch } from "../index";
import moment from "moment";
import { walletStateProps } from "../../types/wallet";
const initialState: walletStateProps = {
  error: null,
  user: {
    _id: "",
    username: "",
    balance: 0,
    energy: 0,
    full_energy: 1,
    tap: 1,
    limit: 1000,
    daily_coins: new Date()
  },
  friend : false,
  users: [],
};

const wallet = createSlice({
  name: "wallet",
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
    getUsersSuccess (state, action) {
      state.users = action.payload
    },
    addWalletSuccess(state, action) {
      state.user = action.payload;
    },
    updateWalletSuccess(state, action) {
      state.user = action.payload;
    },
    addFriendSuccess(state, action) {
      state.friend = action.payload;
    },
  },
});

// Reducer
export default wallet.reducer;

// ----------------------------------------------------------------------

export function getWallet(username: string) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/${username}`);
      dispatch(wallet.actions.getWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}

export function insertWallet(username: string) {
  console.log("wallet address---------->", username);
  return async () => {
    try {
      const response = await axios.post("/wallet/add", { username: username });
      dispatch(wallet.actions.addWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateWallet(
  username: string,
  balance: number,
  energy: number
) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/update/${username}`, {
        balance: balance,
        energy: energy,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateEnergy(username: string, energy: number) {
  console.log("------>", energy);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateEnergy/${username}`, {
        energy: energy,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateFullEnergy(username: string, full_energy: number) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateFullEnergy/${username}`, {
        full_energy: full_energy,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateTap(username: string, tap: number) {
  console.log("------>", tap);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateTap/${username}`, {
        tap: tap,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateLimit(username: string, limit: number) {
  console.log("------>", limit);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateLimit/${username}`, {
        limit: limit,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateBalance(username: string, balance: number) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateBalance/${username}`, {
        balance: balance,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function addFriend(username: string) {
  return async () => {
    try {
      await axios.post(`/wallet/${username}`);
      dispatch(wallet.actions.addFriendSuccess(true));
    } catch (error) {
      dispatch(wallet.actions.addFriendSuccess(false));
    }
  };
}
export function getAllUsers() {
  return async () => {
    try {
      const response = await axios.get("/wallet/all");
      dispatch(wallet.actions.getUsersSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateDailyCoins(username: string, daily_coins: moment.Moment) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateDailyCoins/${username}`, {
        daily_coins: daily_coins,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      dispatch(wallet.actions.hasError(error));
    }
  };
}
