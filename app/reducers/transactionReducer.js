import { SEND_TRANSACTION_SUCCESS, GET_TRANSACTIONS_SUCCESS, GENERATE_RECEIVE_ADDRESS } from '../actions/transactionActions';

const initialState = {
  transactions: [],
  receiveAddress: null,
  sendingTransaction: false,
  gettingTransactions: false,
  error: null,
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        sendingTransaction: false,
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        gettingTransactions: false,
      };
    case GENERATE_RECEIVE_ADDRESS:
      return {
        ...state,
        receiveAddress: action.payload,
      };
    default:
      return state;
  }
}
