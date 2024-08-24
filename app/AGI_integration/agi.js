import { CognitiveArchitectures } from 'cognitive-architectures-react-native';

const agi = {
  analyzePortfolio: (portfolio) => {
    const cognitiveArchitecture = new CognitiveArchitectures();
    const analysis = cognitiveArchitecture.analyzePortfolio(portfolio);
    return analysis;
  },
};

export default agi;
