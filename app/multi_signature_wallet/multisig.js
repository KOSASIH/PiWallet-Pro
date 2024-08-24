import { BitcoinJS } from 'bitcoinjs-react-native';

const multisig = {
  createMultisigWallet: () => {
    const wallet = BitcoinJS.createMultisigWallet(2, 3);
    return wallet;
  },

  signTransaction: (wallet, transaction) => {
    const signatures = wallet.signTransaction(transaction);
    return signatures;
  },
};

export default multisig;
