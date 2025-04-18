const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.get('/me', authenticate, (req, res) => {
  res.json({ message: 'Utilisateur connecté', user: req.user });
});

router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Bienvenue admin !' });
});

module.exports = router;