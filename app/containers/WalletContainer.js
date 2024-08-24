import React, { useState, useEffect } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import WalletHeader from '../components/WalletHeader';
import WalletSidebar from '../components/WalletSidebar';
import WalletContent from '../components/WalletContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const WalletContainer = () => {
  const [loading, setLoading] = useState(false);
  const { wallet, getWalletData } = useWallet();
  const { theme } = useTheme();

  useEffect(() => {
    getWalletData();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    await getWalletData();
    setLoading(false);
  };

  return (
    <div className={`wallet-container ${theme}`}>
      <WalletHeader />
      <WalletSidebar />
      <WalletContent />
      <div className="wallet-refresh">
        <FontAwesomeIcon icon={faSync} size="lg" onClick={handleRefresh} />
        {loading && <span>Loading...</span>}
      </div>
    </div>
  );
};

export default WalletContainer;
