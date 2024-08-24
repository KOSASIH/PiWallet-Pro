import { uPort } from 'uport-react-native';

const did = {
  createIdentity: () => {
    const identity = uPort.createIdentity();
    return identity;
  },

  authenticate: (identity) => {
    const authentication = uPort.authenticate(identity);
    return authentication;
  },
};

export default did;
