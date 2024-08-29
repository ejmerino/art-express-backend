const tedious = require('tedious');

const config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'ednan',
      password: '1234'
    }
  },
  options: {
    database: 'SALES_DATA',
    encrypt: true
  }
};

function getSqlServerConnection() {
  return new tedious.Connection(config);
}

module.exports = { getSqlServerConnection };
