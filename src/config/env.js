require('dotenv').config();

module.exports = {
  node_env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || 'getride',
    user: process.env.DB_USER || 'getride_user',
    password: process.env.DB_PASSWORD || 'getride_password'
  },
  auth: {
    dummyToken: process.env.DUMMY_AUTH_TOKEN || 'dev-token-12345'
  }
};
