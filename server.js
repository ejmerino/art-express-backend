const express = require('express');
const app = express();
const port = 5000;

// Importar las rutas
const oracleRoutes = require('./routes/oracleRoutes'); // Rutas para Oracle
const postgresRoutes = require('./routes/postgresRoutes'); // Rutas para PostgreSQL

// Middleware para manejar JSON
app.use(express.json());

// Usar las rutas de Oracle y PostgreSQL en rutas base diferentes
app.use('/api/oracle', oracleRoutes); // Rutas relacionadas con Oracle
app.use('/api/postgres', postgresRoutes); // Rutas relacionadas con PostgreSQL

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
