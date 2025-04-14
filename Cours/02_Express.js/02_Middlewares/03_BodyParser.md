# Body Parser

C’est un middleware populaire pour Express qui permet de traiter les données du corps des requêtes HTTP. Voici un exemple de code utilisant `body-parser` avec Express :

```bash
npm install body-parser
```

```jsx
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Utilisez body-parser comme middleware
app.use(bodyParser.json()); // pour les requêtes avec un corps JSON
app.use(bodyParser.urlencoded({ extended: true })); // pour les requêtes avec un corps de formulaire

// Route de démonstration qui utilise les données du corps de la requête
app.post('/exemple', (req, res) => {
  // Les données du corps de la requête sont accessibles via req.body
  const dataFromBody = req.body;

  // Faites quelque chose avec les données du corps
  console.log('Données du corps de la requête :', dataFromBody);

  // Répondez au client
  res.send('Données reçues avec succès !');
});

// Écoutez sur un port spécifique
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

```

Ce code utilise `body-parser` pour traiter le corps des requêtes, que ce soit au format JSON ou au format de formulaire. La route `/exemple` est une démonstration qui affiche les données du corps de la requête dans la console et renvoie une réponse simple au client. Vous pouvez tester cela en envoyant une requête POST avec des données au point de terminaison `/exemple`.