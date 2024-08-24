import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const WalletHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { wallet, accounts } = useWallet();
  const { theme } = useTheme();

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.wallet-header')) {
        setMenuOpen(false);
      }
    });
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAccountSelect = (account) => {
    wallet.selectAccount(account);
  };

  return (
    <header className={`wallet-header ${theme}`}>
      <div className="wallet-header-logo">
        <FontAwesomeIcon icon={faWallet} size="lg" />
        <span>PiWallet Pro</span>
      </div>
      <div className="wallet-header-nav">
        <Link to="/wallet">Wallet</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div className="wallet-header-account">
        <span>{accounts.selectedAccount.name}</span>
        <FontAwesomeIcon icon={faCog} size="sm" onClick={handleMenuToggle} />
        {menuOpen && (
          <ul className="wallet-header-account-menu">
            {accounts.list.map((account) => (
              <li key={account.id} onClick={() => handleAccountSelect(account)}>
                {account.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="wallet-header-help">
        <FontAwesomeIcon icon={faQuestionCircle} size="sm" />
      </div>
    </header>
  );
};

export default WalletHeader;
