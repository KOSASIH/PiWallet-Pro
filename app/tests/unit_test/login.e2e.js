import { device, expect } from 'detox';

describe('Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('logs in successfully', async () => {
    await element(by.id('username')).typeText('username');
    await element(by.id('password')).typeText('password');
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('walletScreen'))).toBeVisible();
  });
});
