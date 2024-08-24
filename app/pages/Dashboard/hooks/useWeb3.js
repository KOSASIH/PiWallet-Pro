import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    web3.eth.getAccounts().then((accounts) => {
      setAccount(accounts[0]);
    });
    web3.eth.getBalance(account).then((balance) => {
      setBalance(balance);
    });
  }, []);

  return { account, balance };
};

export default useWeb3;
