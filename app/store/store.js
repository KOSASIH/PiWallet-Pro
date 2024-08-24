import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { walletReducer } from '../reducers/walletReducer';
import { transactionReducer } from '../reducers/transactionReducer';

const rootReducer = combineReducers({
  wallet: walletReducer,
  transactions: transactionReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
