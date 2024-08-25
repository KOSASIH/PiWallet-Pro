export class BiometricAuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BiometricAuthError';
  }
}

export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// Add more error classes as needed
