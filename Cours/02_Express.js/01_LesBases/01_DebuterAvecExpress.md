# Débuter avec Express

## Installation d'Express.js

Avant d'utiliser Express, assurez-vous de l'installer dans votre projet à l'aide de npm. Dans votre terminal, exécutez la commande suivante:

```shell
npm install express
```

## Démarrer notre serveur

Considérons le script suivant comme point de départ de notre app.js:

```js
// Importez la bibliothèque Express ici
const express = require('express');
// Instanciez l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Invoquez la méthode '.listen()' de l'application
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`)
})
```

## Execution du script
Pour exécuter votre script Express, vous pouvez le sauvegarder dans un fichier (par exemple, app.js) et utiliser la commande suivante

```shell
node app.js
```
Cela lancera votre serveur Express sur le port spécifié.
Utilisez le raccourci `CTRL + C` pour fermer votre serveur au sein du terminal.

## Construire notre première route

Modifiez votre fichier app.js en ajoutant une route simple, par exemple:
```js
app.get('/', (req, res) => {
  res.send("Bienvenue sur votre application Express!");
});
```

Vous pouvez maintenant construire et étendre votre application Express en ajoutant des routes, des middlewares et d'autres fonctionnalités spécifiques à votre projet. Express vous offre la flexibilité nécessaire pour construire des applications web robustes.

## Recharger automatiquement le serveur avec Nodemon

Nodemon est un utilitaire de développement pour Node.js qui surveille les fichiers de votre application et redémarre automatiquement le serveur chaque fois qu'un changement est détecté.
Cela facilite le processus de développement en éliminant la nécessité de redémarrer manuellement à chaque modification.

1. **Installation de Nodemon**:

```shell
npm install -g nodemon
```
Cette commande installe Nodemon en tant que dépendance globale, ce qui vous permet de l'utiliser dans n'importe quel projet Node.js.

2. **Utilisation de Nodemon**:

Après avoir installé Nodemon, vous pouvez utiliser la commande `nodemon` au lieu de `node` pour exécuter votre application.

```shell
nodemon app.js
```
Nodemon surveillera les fichiers de votre application. Chaque fois qu'un changement est détecté, il redémarrera automatiquement votre application. Nodemon peut également être utilisé avec des scripts npm dans votre package.json:

```json
"scripts": {
  "start": "nodemon app.js"
}
```

## Structure de dossiers recommandée pour un projet avec Express

La structure de dossiers d'un projet vise à organiser le code de manière à faciliter la compréhension, la maintenance et l'expansion de l'application. Une bonne structure de dossier permet également de séparer les responsabilités, de gérer les dépendances et d'encourager les bonnes pratiques de développement.

**Principaux dossiers recommandés:**

1. `src` (Source Code):
  - Le dossier `src` (source) contient le code source principal de l'application.
  - Il peut être subdivisé en plusieurs sous-dossiers, tels que `routes`, `controllers`, `models`, etc. pour organiser le code par responsabilité fonctionnelle.

2. `public` (Fichiers statiques):
  - Le dossier `public` est destiné à stocker les fichiers statiques accessibles publiquement tels que les fichiers CSS, JavaScript, images, etc.

3. `views` (Vues):
  - Le dossier `views` est utilisé pour stocker les fichiers de vue (templates) utilisés par le moteur de template d'Express.js
  - Les vues décrivent la structure et le format du contenu HTML généré dynamiquement.

L'utilisation du SSR (Server Side Rendering) a des avantages, notamment en terme de référencement (SEO) et de temps de chargement initial pour le client, car le contenu est présent dès le départ dans la réponse HTML. Cependant, cela peut également entraîner une charge plus importante du côté serveur, car le serveur doit générer le HTML pour chaque requête.

4. `config` (Configuration):
  - Le dossier `config` peut contenir des fichiers de configuration pour diverses parties de l'application.
  - Par exemple, vous pourriez avoir des fichiers de configuration pour la base de données, les variables d'environnement, etc.

5. `middlewares`:
  - Le dossier `middlewares` peut contenir des fonctions middleware réutilisables utilisées par Express.
  - Les middlewares sont des fonctions qui interviennent dans le cycle de vie des requêtes et des réponses.

6. `tests` (Tests unitaires):
  - Le dossier `test` est destiné uniquement aux tests unitaires. l'utilisation de tests garantit la stabilité et la qualité du code.

**Exemple de structure:**

```
project-root
|-- src
|   |-- routes
|   |-- controllers
|   |-- models
|   |-- utils
|-- public
|   |-- css
|   |-- js
|   |-- images
|-- views
|-- config
|   |-- database.js
|   |-- env.js
|-- middlewares
|   |-- authentication.js
|   |-- errorHandling.js
|-- tests
|-- app.js
|-- package.json
|-- README.md
```

En Express.js, il n'existe pas de fonctionnalité intégrée permettant de créer automatiquement une structure de fichiers pour votre application. Cependant, il existe plusieurs outils et générateurs qui peuvent vous aider à initialiser rapidement une structure de projet.

Parmi ces outils, le générateur de projet Express officiel appelé Express Generator est très populaire:

1. **Installation d'Express Generator:**

```shell
npm install -g express-generator
```

2. **Création du projet Express:**

```shell
express nom-du-projet
```
Cette commande générera une structure de fichiers de base pour votre application Express dans un répertoire que vous avez nommé.

Vous pouvez également utiliser des alternatives à Express Generator, comme Yeoman, également très populaire.
