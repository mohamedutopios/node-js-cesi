const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Connexion MySQL réussie');
    // Synchronisation automatique des tables
    return sequelize.sync(); // ← Ajout important ici
  })
  .then(() => {
    console.log('✅ Modèles synchronisés avec la base');
  })
  .catch(err => {
    console.error('❌ Erreur de connexion :', err);
  });

module.exports = sequelize;
