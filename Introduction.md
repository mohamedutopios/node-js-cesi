# Node.js et Express.js

Node.js est un **environnnement** qui nous permet d'**utiliser le langage JavaScript côté serveur.**, ce qui est traditionnellement réservé aux navigateurs. C'est un système rapide et évolutif, capable de gérer les opérations asynchrones. Le fait d'utiliser Node.js nous permet plusieurs avantages côté serveur:

- **Equivalence de langage:** Node.js permet l'utilisation du même langage (JavaScript) pour le développement des deux côtés: client et serveur, simplifiant la synchronisation et le partage de code entre les deux.

- **Modularité:** Node.js encourage l'utilisation de modules, permettant aux développeurs de construire des applications facile à maintenir et à étendre.

- **Asynchronisme:** Utilise des opérations asynchrones non bloquantes, ce qui le rend adapté aux applications nécessitant une manipulation simultanée de nombreuses connexions.

- **Scalabilité:** Conçu pour être évolutif horizontalement, permettant de gérer efficacement des applications de grande ampleur.

- **Idéal pour les applications en temps réel:** Excellente prise en charge des chats en direct, des jeux en ligne et des tableaux de bord de suivi en temps réel.

**Express.js**, lui, est un framework web minimaliste, rapide et flexible, conçu pour simplifier le développement d'applications web et d'API avec Node.js.

**Principales caractéristiques:**

- **Minimalisme**: Express adopte une approche minimaliste, laissant aux développeurs la liberté de choisir et d'intégrer des modules tiers selons leurs besoins spécifiques.

- **Middlewares**: Un concept clé d'Express est l'utilisation de middleware. Ces fonctions interviennent dans le cycle de vie des requêtes, permettant de gérer des tâches telles que l'authentification, la gestion des sessions, la compression, etc.

- **Routage**: Express simplifie la définition des routes et la gestion des requêtes HTTP, facilitant la création de points d'entrée pour différentes parties de votre application

- **Template:** Express supporte divers moteurs de templates pour la génération dynamique de contenu HTML, tels EJS, HandeBars, ou Pug (Jade).

- **Gestion des erreurs**: Fournit des mécanismes efficaces pour la gestion des erreur, facilitant le débogage et l'amélioration de la robustesse des applications.

L'architecture d'Express.js repose sur les fonctionnalités offertes par Node.js, notamment la gestion des requêtes HTTP, la manipulation des évènements et le modèle non bloquant. **Par conséquent, il n'est pas possible d'utiliser Express.js en dehors de l'écosystème Node.js**

## Commencer avec Express

1. **Installation:** Utilisez npm pour installer Express: `npm install express`.

2. **Création d'une Application Express**:

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});
```