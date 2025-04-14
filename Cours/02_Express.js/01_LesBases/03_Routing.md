# Le routing

L'un des aspects les plus importants d'Express.js est son système de routage. Il permet de définir comment l'application répond à une demande client particulière, en fonction de l'URL demandée, de la méthode HTTP utilisée (GET, POST, etc.)

## Les routes de base
Les routes dans Express.js sont définies en associant une URL à une fonction de gestion (handler function). Voici un exemple de route simple:

```js
app.get('/', (req, res) => {
  res.send("Bienvenue sur la page d'accueil!");
});
```
Dans cet exemple, lorsque l'utilisateur accède à la racine de votre site ("/"), la fonction de gestion spécifiée est exécutée, et le message "Bienvenue sur la page d'accueil!" est envoyé en réponse.

Une fonction de gestion (handler function) est exécutée lorsque l'application reçoit une requête HTTP correspondant à une route spécifique. Cette fonction est responsable du traitement de la requête puis de la génération de la réponse à renvoyer au client.

Dans le cadre des routes Express, la fonction de gestion prend généralement deux paramètres: `req` (request) et `res` (response). Ces paramètres représent respectivement l'objet de la requête HTTP entrante et l'objet de réponse que votre application Express utilisera pour envoyer la réponse au client.

```js
app.get('*', (req, res) => {
  res.send("Oups, on dirait qu'il n'y a rien ici");
})
```
L'étoile (*) utilisée en tant qu'argument dans une route est un caractère générique qui fait correspondre n'importe quelle séquence de caractères. Dans le contexte d'une route, elle est souvent utilisée comme une route de capture-tout (catch-all) pour gérer toutes les routes qui n'ont pas été définies explicitement.

## Utilisation des fichiers statiques
Vous pouvez placer vos fichiers statiques tels que les fichiers HTML, CSS et JS dans le dossier `public`. Il ne vous reste plus qu'à rajouter dans votre app.js la méthode `express.static` pour servir ces fichiers de manière statique.

```js
//app.js
// Définir le dossier public pour les fichiers statiques
app.use(express.static('public'));
```

## Construire un routeur
Un routeur dans Express est un moyen de regrouper les routes liées à une partie spécifique de votre application. Cela rend le code plus lisible et facilite la gestion des différentes fonctionnalités de votre application.

Pour cela, créez un fichier séparé pour votre routeur, par exemple `routes.js`. Dans ce fichier, importez Express et créez un routeur:

```js
// routes.js
const express = require("express");
const router = express.Router();

// Définissez vos routes
router.get('/', (req, res) => {
  res.send("Bienvenue sur la page d'accueil");
});

// Exportez le routeur pour l'utiliser dans le fichier principal (app.js)
module.exports = router;
```

Modifiez le fichier app.js pour utiliser le routeur créé.

```js
//app.js
const express = require('express');
const app = express();

// Importez le routeur
const mainRouter = require("./routes")

// Utilisez le routeur pour gérer les routes
app.use('/', mainRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
```

Le routeur a été implémenté grâce au `app.use`, dans ce cas précis, il s'agit d'un routeur principal, il n'a donc pas de nécessité à être préfixé. Si j'avais décidé d'implémenter un routeur spécifique, j'aurai pu préfixé chacune de mes routes. Par exemple, pour un routeur lié aux utilisateurs:
```js
const userRouter = require(./routes);
app.use('/users', userRouter);
```

## Les paramètres de route

`req.params` est un objet dans Express qui contient les valeurs des paramètres de route extraits de l'URL de la requête HTTP. Dans le contexte des routes avec des paramètres dynamiques, vous pouvez définir les parties de l'URL comme des paramètres, Express extrait ces valeurs et le rend disponibles via l'objet `req.params`

```js
app.get('/utilisateur/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Informations sur l'utilisateur ${userId}`);
})
```
Dans cet exemple, la route est définie comme `/utilisateur/:id` où `:id` est un paramètre de route. Lorsqu'une requête est faite à une URL telle que `utilisateur/123`, Express extrait automatiquement la valeur `123` et la rend disponible dans req.params.id.
Vous pouvez utiliser `req.params` pour capturer plusieurs paramètres de route si votre route est configurée avec plusieurs parties dynamiques. Par exemple:

```js
app.get('/utilisateur/:id/articles/:articleId', (req, res) => {
  const userId = req.params.id;
  const articleId = req.params.articleId;
  res.send(`Informations sur l'article ${articleId} de l'utilisateur ${userId}`);
})
```
Dans cet exemple, si la requête est faite à l'URL `/utilisateur/123/articles/456`; alors `req.params.id` sera égal à `123` et `req.params.articleId` sera égal à `456`.

## Organisation avancée des routes

Au fur et à mesure de l'avancement de votre projet, le noombre de vos routeurs peut s'accumuler, devenant difficilement lisible. Dans ce genre de cas, le fichier `index.js` dans le dossier `routes` est souvent utilisé pour regrouper et exporter tous les routeurs présents dans le dossier. Cela simplifie l'importation des routeurs dans le fichier principal de l'application (`app.js`).
Voici comment cela peut être mis en oeuvre:

**Structure du dossier `routes`:**
```
- routes
  - index.js
  - userRouter.js
  - productRouter.js
  - bookRouter.js
  - movieRouter.js
```

**Contenu du fichier `routes/index.js`:**
```js
const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const bookRouter = require('./bookRouter');
const movieRouter = require('./movieRouter');

// Utilisation des routeurs spécifiques
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/books', bookRouter);
router.use('/movies', movieRouter);

module.exports = router;
```

**Utilisation dans le fichier principal (`app.js`)**

```js
const express = require('express');
const app = express();
const allRouters = require('./routes') 

app.use('/', allRouters);

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
})
```
Dans cet exemple, le fichier `routes/index.js` regroupe tous les routeurs spécifiques et les exporte comme un seul routeur (`allRouters`). Cela simplifie l'utilisation dans le fichier principal, où vous pouvez utiliser `app.use('/', allRouters)` pour monter les routeurs sous le préfixe "/".

Maintenant que nous savons classer efficacement nos routes, il est temps de mettre en place la logique interne à celles-ci, c'est à dire **les controllers**.




