import axios from 'axios';
import { TRANSACTION_API_URL } from '../constants/api';

export const SEND_TRANSACTION = 'SEND_TRANSACTION';
export const SEND_TRANSACTION_SUCCESS = 'SEND_TRANSACTION_SUCCESS';
export const SEND_TRANSACTION_FAILURE = 'SEND_TRANSACTION_FAILURE';

export const sendTransaction = (amount, recipient, note) => async (dispatch) => {
  dispatch({ type: SEND_TRANSACTION });
  try {
    const response = await axios.post(`${TRANSACTION_API_URL}/transactions`, {
      amount,
      recipient,
      note,
    });
    const transaction = response.data;
    dispatch({ type: SEND_TRANSACTION_SUCCESS, payload: transaction });
  } catch (error) {
    dispatch({ type: SEND_TRANSACTION_FAILURE, payload: error.message });
  }
};

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';

export const getTransactions = () => async (dispatch) => {
  dispatch({ type: GET_TRANSACTIONS });
  try {
    const response = await axios.get(`${TRANSACTION_API_URL}/transactions`);
    const transactions = response.data;
    dispatch({ type: GET_TRANSACTIONS_SUCCESS, payload: transactions });
  } catch (error) {
    dispatch({ type: GET_TRANSACTIONS_FAILURE, payload: error.message });
  }
};

export const GENERATE_RECEIVE_ADDRESS = 'GENERATE_RECEIVE_ADDRESS';
export const generateReceiveAddress = () => async (dispatch) => {
  try {
    const response = await axios.post(`${TRANSACTION_API_URL}/receive-address`);
    const address = response.data;
    dispatch({ type: GENERATE_RECEIVE_ADDRESS, payload: address });
  } catch (error) {
    console.error(error);
  }
};
