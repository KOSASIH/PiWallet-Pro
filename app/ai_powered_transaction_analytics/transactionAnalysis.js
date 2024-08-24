import { TensorFlow } from 'tensorflow-react-native';
import { transactionData } from './transactionData';

const transactionAnalysis = {
  analyzeTransactions: () => {
    const model = TensorFlow.loadModel('transaction_analysis_model');
    const inputData = transactionData.map((transaction) => [
      transaction.amount,
      transaction.category,
      transaction.date,
    ]);
    const output = model.predict(inputData);
    return output;
  },
};

export default transactionAnalysis;
