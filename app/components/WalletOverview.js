import React from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const WalletOverview = () => {
  const { wallet } = useWallet();
  const { theme } = useTheme();

  return (
    <div className={`wallet-overview ${theme}`}>
      <h2>Wallet Overview</h2>
      <div className="wallet-overview-chart">
        <FontAwesomeIcon icon={faChartLine} size="lg" />
        <span>Balance: {wallet.balance}</span>
      </div>
      <div className="wallet-overview-stats">
        <div>
          <span>Accounts:</span>
          <span>{wallet.accounts.length}</span>
        </div>
        <div>
          <span>Transactions:</span>
          <span>{wallet.transactions.length}</span>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;
