import { WALLET_TYPES } from './constants';

export function formatCurrency(amount, currency) {
  const symbol = CURRENCY_SYMBOLS[currency];
  return `${symbol}${amount.toFixed(2)}`;
}

export function formatDateTime(date, format) {
  const moment = require('moment');
  return moment(date).format(format);
}

export function getWalletTypeLabel(type) {
  switch (type) {
    case WALLET_TYPES.BTC:
      return 'Bitcoin';
    case WALLET_TYPES.ETH:
      return 'Ethereum';
    case WALLET_TYPES.LTC:
      return 'Litecoin';
    default:
      return 'Unknown';
  }
}

export function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
