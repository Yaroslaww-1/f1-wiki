type DatabaseTypes = 'postgres';

const config = {
  type: 'postgres' as DatabaseTypes,
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'NO_DATABASE_USERNAME_SET_IN_CONFIG',
  password: process.env.DATABASE_PASSWORD || 'NO_DATABASE_PASSWORD_SET_IN_CONFIG',
  database: process.env.DATABASE_DATABASE || 'NO_DATABASE_NAME_SET_IN_CONFIG',
};

export default config;
