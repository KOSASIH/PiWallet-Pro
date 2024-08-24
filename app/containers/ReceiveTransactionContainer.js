import React, { useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import ReceiveTransactionForm from '../components/ReceiveTransactionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const ReceiveTransactionContainer = () => {
  const [address, setAddress] = useState('');
  const { wallet, generateReceiveAddress } = useWallet();
  const { theme } = useTheme();

  const handleGenerateAddress = async () => {
    try {
      const address = await generateReceiveAddress();
      setAddress(address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`receive-transaction-container ${theme}`}>
      <h2>Receive Transaction</h2>
      <ReceiveTransactionForm
        address={address}
        onChangeAddress={(e) => setAddress(e.target.value)}
      />
      <button className="generate-address-btn" onClick={handleGenerateAddress}>
        <FontAwesomeIcon icon={faQrcode} size="lg" />
        Generate Address
      </button>
      {address && (
        <div className="receive-transaction-qrcode">
          <img src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${address}`} />
        </div>
      )}
    </div>
  );
};

export default ReceiveTransactionContainer;
