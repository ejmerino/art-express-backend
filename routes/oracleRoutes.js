// oracleRoutes.js
const express = require('express');
const router = express.Router();
const { getOracleConnection } = require('../config/oracle');

// Ruta para obtener todos los productos
router.get('/products', async (req, res) => {
  let connection;
  try {
    connection = await getOracleConnection();

    const result = await connection.execute('SELECT * FROM PRODUCTS');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al obtener productos' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error al cerrar la conexión:', err);
      }
    }
  }
});

module.exports = router;
