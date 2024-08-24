import React, { useState, useEffect } from 'react';
import { BiometricAuth } from './biometricAuth';
import { encryption } from './encryption';
import { transactionAnalysis } from './transactionAnalysis';
import { marketData } from './marketData';
import { did } from './did';
import { multisig } from './multisig';
import { atomicSwaps } from './atomicSwaps';
import { gamification } from './gamification';
import { quantumCryptography } from './quantumCryptography';
import { defi } from './defi';
import { agi } from './agi';
import { xr } from './xr';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [biometricType, setBiometricType] = useState(null);

  useEffect(() => {
    BiometricAuth.authenticate().then((result) => {
      if (result.success) {
        setIsAuthenticated(true);
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <BiometricAuth />;
  }

  return (
    <View>
      <Text>Welcome to PiWallet-Pro!</Text>
      <Button title="Encrypt Data" onPress={() => encryption.encrypt('Hello, World!')} />
      <Button title="Analyze Transactions" onPress={() => transactionAnalysis.analyzeTransactions()} />
      <Button title="Get Market Data" onPress={() => marketData.subscribeToMarketData()} />
      <Button title="Create DID" onPress={() => did.createIdentity()} />
      <Button title="Create Multisig Wallet" onPress={() => multisig.createMultisigWallet()} />
      <Button title="Create Atomic Swap" onPress={() => atomicSwaps.createAtomicSwap()} />
      <Button title="Earn Rewards" onPress={() => gamification.earnReward(1)} />
      <Button title="Encrypt with Quantum Cryptography" onPress={() => quantumCryptography.encrypt('Hello, World!')} />
      <Button title="Lend with DeFi" onPress={() => defi.lend(100, 'ETH')} />
      <Button title="Analyze Portfolio with AGI" onPress={() => agi.analyzePortfolio([{ asset: 'BTC', amount: 1 }])} />
      <Button title="Create AR Experience" onPress={() => xr.createARExperience()} />
    </View>
  );
};

export default App;
