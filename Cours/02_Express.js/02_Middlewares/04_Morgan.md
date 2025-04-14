# Morgan

`Morgan` est un autre middleware populaire pour Express.js, utilisé pour la journalisation (logging) des requêtes HTTP. Il permet de suivre les détails des requêtes entrantes, tels que les informations sur les méthodes, les URL, les codes de statut, les temps de réponse, etc.

```bash
# Installation
npm install morgan
```

```jsx
// import
const express = require('express');
const morgan = require('morgan');
```

### 3. Configuration du Middleware `Morgan`

Utilisez `morgan` comme middleware dans votre application Express pour générer des journaux de requêtes HTTP :

```jsx
// Utilisation de Morgan pour la journalisation des requêtes
app.use(morgan('dev'));
```

Le paramètre `'dev'` spécifie le format de journalisation prédéfini de développement, mais vous pouvez utiliser d'autres formats prédéfinis ou définir le vôtre.

### 4. Formats Prédéfinis

`Morgan` propose plusieurs formats prédéfinis que vous pouvez utiliser pour personnaliser le style de journalisation. Voici quelques exemples :

- `'dev'`: Format de développement concis. Exemple : `GET /example 200 4.567 ms - 1234`
- `'combined'`: Format standard combinant IP, méthode, URL, etc.
- `'common'`: Format standard sans les informations sur le référent
- `'short'`: Format court, incluant seulement la méthode, l'URL et le statut

### 5. Journalisation Personnalisée

Vous pouvez également créer votre propre format de journalisation en fournissant une fonction personnalisée à `morgan`. Cette fonction prend deux arguments (req et res) et renvoie la chaîne à journaliser :

```jsx
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res), 'ms',
  ].join(' ');
}));
```

### 6. Sélection des Environnements

Vous pouvez conditionner l'utilisation de `morgan` en fonction de l'environnement, par exemple, pour l'utiliser uniquement en mode de développement :

```jsx
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
```

### 7. Journalisation des Erreurs

`Morgan` peut également être utilisé pour journaliser les erreurs. Placez simplement le middleware `morgan` après vos gestionnaires d'erreurs :

```jsx
// Gestion des erreurs (après les routes)
app.use((err, req, res, next) => {
  // Log d'erreur avec Morgan
  morgan('combined', { stream: process.stderr })(err, req, res);

  // Votre logique de gestion des erreurs ici...
  res.status(500).send('Erreur interne du serveur');
});
```