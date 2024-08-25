import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TransactionService } from '../services/TransactionService';

const Transaction = ({ transaction }) => {
  const [transactionData, setTransactionData] = useState(transaction);

  const handleTransactionDetails = async () => {
    const transactionDetails = await TransactionService.getTransactionDetails(transactionData.id);
    setTransactionData(transactionDetails);
  };

  return (
    <View>
      <Text>{transactionData.type}</Text>
      <Text>{transactionData.amount}</Text>
      <Text>{transactionData.date}</Text>
      <TouchableOpacity onPress={handleTransactionDetails}>
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;
