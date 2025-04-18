require('dotenv').config(); 
const express = require('express');
const app = express();

if (!process.env.DB_USER || !process.env.DB_PASS) {
  console.error('❌ Les variables .env ne sont pas chargées correctement');
  process.exit(1);
}
require('./config/db');


const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur en marche sur http://localhost:${PORT}`));
