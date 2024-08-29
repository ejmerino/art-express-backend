// server.js
const express = require('express');
const app = express();
const port = 3000;
const oracleRoutes = require('./routes/oracleRoutes');

// Middleware para manejar JSON
app.use(express.json());

// Usa las rutas de Oracle
app.use('/api', oracleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});