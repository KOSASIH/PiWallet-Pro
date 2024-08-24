import { Sodium } from 'sodium-react-native';

const encryption = {
  encrypt: (data, password) => {
    const key = Sodium.crypto_pwhash_argon2id(password, 16);
    const encryptedData = Sodium.crypto_secretbox_easy(data, key);
    return encryptedData;
  },

  decrypt: (encryptedData, password) => {
    const key = Sodium.crypto_pwhash_argon2id(password, 16);
    const decryptedData = Sodium.crypto_secretbox_open_easy(encryptedData, key);
    return decryptedData;
  },
};

export default encryption;
