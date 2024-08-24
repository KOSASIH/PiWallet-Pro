import axios from 'axios';
import { WALLET_API_URL } from '../constants/api';

export const GET_WALLET_DATA = 'GET_WALLET_DATA';
export const GET_WALLET_DATA_SUCCESS = 'GET_WALLET_DATA_SUCCESS';
export const GET_WALLET_DATA_FAILURE = 'GET_WALLET_DATA_FAILURE';

export const getWalletData = () => async (dispatch) => {
  dispatch({ type: GET_WALLET_DATA });
  try {
    const response = await axios.get(`${WALLET_API_URL}/wallet`);
    const data = response.data;
    dispatch({ type: GET_WALLET_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WALLET_DATA_FAILURE, payload: error.message });
  }
};

export const UPDATE_WALLET_BALANCE = 'UPDATE_WALLET_BALANCE';
export const updateWalletBalance = (balance) => (dispatch) => {
  dispatch({ type: UPDATE_WALLET_BALANCE, payload: balance });
};

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const addAccount = (account) => (dispatch) => {
  dispatch({ type: ADD_ACCOUNT, payload: account });
};

export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT';
export const removeAccount = (accountId) => (dispatch) => {
  dispatch({ type: REMOVE_ACCOUNT, payload: accountId });
};
