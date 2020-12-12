const config = {
  host: process.env.APP_HOST || 'localhost',
  port: parseInt(process.env.APP_PORT, 10) || 5001,
  appClientUrl: process.env.APP_CLIENT_URL || '',
};

export default config;
