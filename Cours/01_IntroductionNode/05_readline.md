# Le module readline

Le module `readline` est un module intégré à Node.js qui facilite la lecture de données depuis un flux de données, généralement une entrée utilisateur en mode interactif. Il est souvent utilisé pour créer des interfaces en ligne de commande (CLI) interactives dans les applications Node.js.

### Utilisation de base :

Pour utiliser le module `readline`, vous devez d'abord l'importer dans votre script Node.js :

```js
const readline = require('readline');
```

Ensuite, vous pouvez créer une interface `readline` en utilisant la méthode `createInterface`. Cette méthode prend deux arguments : un objet de configuration et deux flux de données (généralement `process.stdin` pour l'entrée et `process.stdout` pour la sortie).

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

### Méthodes principales :

1. **`question()`** :
La méthode `question` est utilisée pour poser une question à l'utilisateur et attendre une réponse. Elle prend trois arguments : la question à poser, une fonction de rappel qui sera appelée avec la réponse de l'utilisateur, et éventuellement une fonction de rappel qui sera appelée lorsque la saisie est terminée.
    
```js
rl.question('Quel est votre nom ? ', (name) => {
    console.log(`Bonjour, ${name} !`);
    rl.close();
});
```

2. **`close()`** :
La méthode `close` est utilisée pour fermer l'interface `readline` une fois que vous avez terminé de lire les données.

```jsx
rl.close();
```

3. **Événements** :
Le module `readline` émet également des événements que vous pouvez écouter pour traiter différentes actions, telles que la réception d'une ligne de texte ou la fermeture de l'interface. Les événements les plus couramment utilisés sont `line` et `close`.
    
```jsx
rl.on('line', (input) => {
    console.log(`Vous avez saisi : ${input}`);
});

rl.on('close', () => {
    console.log('L\\'interface readline est fermée.');
});

```

### Exemple complet :

Voici un exemple complet illustrant l'utilisation du module `readline` pour créer une interface en ligne de commande qui demande le nom de l'utilisateur et affiche un message de salutation :

```jsx
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est votre nom ? ', (name) => {
  console.log(`Bonjour, ${name} !`);
  rl.close();
});

rl.on('close', () => {
  console.log('L\'interface readline est fermée.');
});
```