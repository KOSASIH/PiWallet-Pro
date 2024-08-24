import React, { useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import SendTransactionForm from '../components/SendTransactionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SendTransactionContainer = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
  const { wallet, sendTransaction } = useWallet();
  const { theme } = useTheme();

  const handleSendTransaction = async () => {
    try {
      await sendTransaction(amount, recipient, note);
      setAmount('');
      setRecipient('');
      setNote('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`send-transaction-container ${theme}`}>
      <h2>Send Transaction</h2>
      <SendTransactionForm
        amount={amount}
        recipient={recipient}
        note={note}
        onChangeAmount={(e) => setAmount(e.target.value)}
        onChangeRecipient={(e) => setRecipient(e.target.value)}
        onChangeNote={(e) => setNote(e.target.value)}
      />
      <button className="send-transaction-btn" onClick={handleSendTransaction}>
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        Send Transaction
      </button>
    </div>
  );
};

export default SendTransactionContainer;
