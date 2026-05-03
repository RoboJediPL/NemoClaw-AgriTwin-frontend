// Ensure that the environment variables are correctly set for different environments.
export const environment = {
  production: process.env.NODE_ENV === 'production',
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000'
};