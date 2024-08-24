import { GET_WALLET_DATA_SUCCESS, UPDATE_WALLET_BALANCE, ADD_ACCOUNT, REMOVE_ACCOUNT } from '../actions/walletActions';

const initialState = {
  walletData: null,
  balance: 0,
  accounts: [],
  loading: false,
  error: null,
};

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WALLET_DATA_SUCCESS:
      return {
        ...state,
        walletData: action.payload,
        loading: false,
      };
    case UPDATE_WALLET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case REMOVE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter((account) => account.id !== action.payload),
      };
    default:
      return state;
  }
}
