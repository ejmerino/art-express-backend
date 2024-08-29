// routes/postgresRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/postgres');

// Ruta para obtener todos los clientes
router.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM CUSTOMERS');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener clientes:', err);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

module.exports = router;
