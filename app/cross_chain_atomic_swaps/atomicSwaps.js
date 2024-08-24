import { SwapJS } from 'swapjs-react-native';

const atomicSwaps = {
  createAtomicSwap: () => {
    const swap = SwapJS.createAtomicSwap('BTC', 'ETH');
    return swap;
  },

  executeAtomicSwap: (swap) => {
    const result = SwapJS.executeAtomicSwap(swap);
    return result;
  },
};

export default atomicSwaps;
