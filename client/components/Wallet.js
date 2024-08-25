import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { WalletService } from '../services/WalletService';
import { TransactionService } from '../services/TransactionService';
import { AssetService } from '../services/AssetService';
import { BiometricAuth } from '../components/BiometricAuth';
import { WalletHeader } from '../components/WalletHeader';
import { WalletBalance } from '../components/WalletBalance';
import { TransactionList } from '../components/TransactionList';
import { AssetList } from '../components/AssetList';

const Wallet = () => {
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [assets, setAssets] = useState([]);
  const [biometricAuth, setBiometricAuth] = useState(false);

  useEffect(() => {
    const fetchWalletData = async () => {
      const walletData = await WalletService.getWallet();
      setWallet(walletData);
      const transactionData = await TransactionService.getTransactions(walletData.id);
      setTransactions(transactionData);
      const assetData = await AssetService.getAssets(walletData.id);
      setAssets(assetData);
    };
    fetchWalletData();
  }, []);

  const handleBiometricAuth = async () => {
    const authResult = await BiometricAuth.authenticate();
    if (authResult.success) {
      setBiometricAuth(true);
    } else {
      setBiometricAuth(false);
    }
  };

  return (
    <View>
      <WalletHeader wallet={wallet} />
      <WalletBalance wallet={wallet} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionList transaction={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={assets}
        renderItem={({ item }) => (
          <AssetList asset={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {biometricAuth ? (
        <TouchableOpacity onPress={handleBiometricAuth}>
          <Text>Lock Wallet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleBiometricAuth}>
          <Text>Unlock Wallet</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Wallet;
