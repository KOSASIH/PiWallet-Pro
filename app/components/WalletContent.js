import React, { useState, useEffect } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import WalletOverview from './WalletOverview';
import WalletAccounts from './WalletAccounts';
import WalletTransactions from './WalletTransactions';

const WalletContent = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const { wallet, accounts } = useWallet();
  const { theme } = useTheme();

  useEffect(() => {
    wallet.getWalletData();
  }, []);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <main className={`wallet-content ${theme}`}>
      <div className="wallet-content-tabs">
        <button
          className={`wallet-content-tab ${selectedTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabSelect('overview')}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          <span>Overview</span>
        </button>
        <button
          className={`wallet-content-tab ${selectedTab === 'transactions' ? 'active' : ''}`}
          onClick={() => handleTabSelect('transactions')}
        >
          <FontAwesomeIcon icon={faGear} size="lg" />
          <span>Transactions</span>
        </button>
      </div>
      {selectedTab === 'overview' && <WalletOverview />}
      {selectedTab === 'accounts' && <WalletAccounts />}
      {selectedTab === 'transactions' && <WalletTransactions />}
    </main>
  );
};

export default WalletContent;
