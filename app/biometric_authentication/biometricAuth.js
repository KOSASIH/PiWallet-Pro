import React, { useState, useEffect } from 'react';
import { FaceID, Fingerprint } from 'react-native-biometric-auth';

const BiometricAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [biometricType, setBiometricType] = useState(null);

  useEffect(() => {
    FaceID.isSupported().then((supported) => {
      if (supported) {
        setBiometricType('FaceID');
      } else {
        Fingerprint.isSupported().then((supported) => {
          if (supported) {
            setBiometricType('Fingerprint');
          }
        });
      }
    });
  }, []);

  const handleBiometricAuth = () => {
    if (biometricType === 'FaceID') {
      FaceID.authenticate().then((result) => {
        if (result.success) {
          setIsAuthenticated(true);
        }
      });
    } else if (biometricType === 'Fingerprint') {
      Fingerprint.authenticate().then((result) => {
        if (result.success) {
          setIsAuthenticated(true);
        }
      });
    }
  };

  return (
    <View>
      {isAuthenticated ? (
        <Text>Authenticated!</Text>
      ) : (
        <Button title="Authenticate" onPress={handleBiometricAuth} />
      )}
    </View>
  );
};

export default BiometricAuth;
