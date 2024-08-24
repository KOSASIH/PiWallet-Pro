import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../contexts/WalletContext';
import { useTheme } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faList, faGear } from '@fortawesome/free-solid-svg-icons';

const WalletSidebar = () => {
  const { wallet, accounts } = useWallet();
  const { theme } = useTheme();

  return (
    <aside className={`wallet-sidebar ${theme}`}>
      <ul>
        <li>
          <Link to="/wallet/overview">
            <FontAwesomeIcon icon={faChartLine} size="lg" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/wallet/accounts">
            <FontAwesomeIcon icon={faList} size="lg" />
            <span>Accounts</span>
          </Link>
        </li>
        <li>
          <Link to="/wallet/transactions">
            <FontAwesomeIcon icon={faGear} size="lg" />
            <span>Transactions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default WalletSidebar;
