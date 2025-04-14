# Les middlewares

Les middlewares sont des fonctions qui ont accès à l'objet de requête (req), à l'objet de réponse (res), et à la fonction suivante dans le cycle de requête-réponse de l'application. Ils peuvent effectuer des actions telles que la modification de la requête ou de la réponse, l'exécution de code additionnel, ou l'arrêt prématuré du cycle de requête-réponse.

## Fonctionnement des middlewares.
  - Chaque middleware reçoit trois arguments: l'objet de requête (req), l'objet de réponse (res) et la fonction suivante du cycle (next)
  - Les middlewares peuvent effectuer des opérations synchrones ou asynchrones, et ils peuvent également décider d'appeler ou non la fonction next() pour passer au middleware suivant.
  - Les middlewares peuvent se placer au niveau de l'application ou au niveau du routeur (selon l'instance à laquelle ils sont rattaché, app ou routeur)

## Utilisation de middleware.
Pour utiliser un middleware dans Express, on utilise la fonction `use()`.

```js
// app.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('test!');
  next();
})

// Middleware qui afficherait un message à chaque requête
app.use((req, res, next) => {
  console.log('Middleware exécuté!');
  next();
})



// Route principale
app.get('/' (req, res) => {
  res.send("Hello world");
})
```

**Ordre d'exécution:**
 - L'ordre dans lequel vous utilisez les middlewares est important. Ils sont exécutés dans l'ordre où vous les déclarez avec `app.use()`
 - Les middlewares sont souvent utilisés pour effectuer des tâches communes telles que la gestion des erreurs, l'analyse du corps de la requête, la gestion des sessions, etc.

Pour un exemple plus concret, on peut analyser par exemple ce middleware d'authentification de base:

```js
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
}
```

On peut également trouver des middlewares de traitement d'erreurs.
Les middlewares de traitement d'erreurs fonctionnent de la même façon que les autres, à l'exception qu'il faudra 4 arguments au lieu de 3: (err, req, res, next):

```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send("Erreur!");
})
```
