// oracle.js
const oracledb = require('oracledb');

async function getOracleConnection() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: 'system',
      password: '1234',
      connectString: 'localhost:1521/xe' // Ajusta esto según tu configuración
    });
    return connection;
  } catch (err) {
    console.error('Error en la conexión a Oracle:', err);
    throw err; // Lanza el error para manejarlo en la ruta
  }
}

module.exports = { getOracleConnection };
