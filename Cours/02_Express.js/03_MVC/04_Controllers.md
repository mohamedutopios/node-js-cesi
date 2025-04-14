# Les controllers

## Introduction aux controllers

Un controller est une fonction qui gère une certaine logique pour une route spécifique.
Les controllers aident à séparer la logique de gestion des routes du code principal de l'application.

## Organisation du code

Les controllers aident à organiser le code de manière modulaire. Ils sont généralement stockés dans un dossier dédié, souvent appelé `controllers/` pour une meilleure structure.

## Création d'un controller

Un controller est simplement une fonction JS exportée.

```js
// controllers/sampleController.js

// Fonction pour la route "/"
const homePage = (req, res) => {
  res.send("Bienvenue sur la page d'Accueil")
};

// Fonction pour la route '/about'
const aboutPage = (req, res) => {
  res.send("A propos");
};

// Fonction pour la route '/contact'
const contactPage = (req, res) => {
  res.send("Contactez-nous");
};

// Export des fonctions pour les rendre disponibles à d'autres modules
module.exports = {
  homePage,
  aboutPage,
  contactPage
}
```

## Utilisation des controllers dans les routes

Dans vos routeurs, vous pouvez importer et utiliser le controller pour une route spécifique.

```js
// routes/sampleRouter.js
const express = require('express');
const router = express.Router();

// Importez les controllers associés
const sampleController = require('../controllers/sampleController');

// Définissez les routes associées aux fonctions du controller
router.get('/', sampleController.homePage);
router.get('/about', sampleController.aboutPage);
router.get('/contact', sampleController.contactPage);

module.exports = router;
```

## Passage de paramètres aux Controllers

Les controllers peuvent recevoir des paramètres de requête (req) et de réponse (res).

```js
const paramController = (req, res) => {
  const {id} = req.params;
  res.send(`Id de l'utilisateur: ${id}`);
}

// Côté route, rien ne change
app.get('/user/:id', paramController);
```

## Réponses JSON dans les Controllers

Souvent, les controllers renvoient des réponses JSON.

```js
const jsonController = (req, res) => {
  const data = {message: "Réponse JSON"};
  res.json(data);
}
```