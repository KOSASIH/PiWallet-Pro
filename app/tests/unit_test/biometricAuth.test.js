import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BiometricAuth from './BiometricAuth';

describe('BiometricAuth', () => {
  it('renders correctly', () => {
    const { getByText } = render(<BiometricAuth />);
    expect(getByText('Authenticate with Biometrics')).toBeTruthy();
  });

  it('calls onAuthenticate when button is pressed', () => {
    const onAuthenticate = jest.fn();
    const { getByText } = render(<BiometricAuth onAuthenticate={onAuthenticate} />);
    const button = getByText('Authenticate');
    fireEvent.press(button);
    expect(onAuthenticate).toHaveBeenCalledTimes(1);
  });
});
