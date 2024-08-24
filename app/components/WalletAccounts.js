import React from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const WalletAccounts = () => {
  const { wallet } = useWallet();
  const { theme } = useTheme();

  return (
    <div className={`wallet-accounts ${theme}`}>
      <h2>Wallet Accounts</h2>
      <ul>
        {wallet.accounts.map((account) => (
          <li key={account.id}>
            <span>{account.name}</span>
            <span>{account.balance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletAccounts;
