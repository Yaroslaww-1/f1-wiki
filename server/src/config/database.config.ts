type DatabaseTypes = 'postgres';

const config = {
  connectionString: process.env.DATABASE_CONNECTION_STRING || 'DATABASE_CONNECTION_STRING_NOT_SET',
};

export default config;
