import { Web3 } from 'web3-react-native';
import { Compound } from 'compound-react-native';

const defi = {
  lend: (amount, asset) => {
    const compound = new Compound(Web3);
    compound.lend(amount, asset);
  },

  borrow: (amount, asset) => {
    const compound = new Compound(Web3);
    compound.borrow(amount, asset);
  },
};

export default defi;
