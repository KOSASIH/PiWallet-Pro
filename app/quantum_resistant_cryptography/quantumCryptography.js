import { LatticeCrypto } from 'lattice-crypto-react-native';

const quantumCryptography = {
  encrypt: (data, publicKey) => {
    const encryptedData = LatticeCrypto.encrypt(data, publicKey);
    return encryptedData;
  },

  decrypt: (encryptedData, privateKey) => {
    const decryptedData = LatticeCrypto.decrypt(encryptedData, privateKey);
    return decryptedData;
  },
};

export default quantumCryptography;
