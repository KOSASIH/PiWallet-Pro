import { createContext, useState } from 'react';

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    balance: 0,
    accounts: [],
    transactions: [],
  });

  const getWalletData = async () => {
    // fetch wallet data from API
    const response = await fetch('/api/wallet');
    const data = await response.json();
    setWallet(data);
  };

  return (
    <WalletContext.Provider value={{ wallet, getWalletData }}>
      {children}
    </WalletContext.Provider>
  );
};

export { WalletProvider, WalletContext };
