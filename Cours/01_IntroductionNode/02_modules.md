### Compréhension du Système de Modules Intégré

Node.js, en tant qu’environnement JavaScript côté serveur, dispose
d’un système de modules intégré qui permet d’organiser le code de
manière modulaire. Cela favorise la réutilisation du code, la gestion
des dépendances et la maintenabilité des applications. Jetons un coup
d’œil aux concepts clés liés aux modules en Node.js.

### 1. **Qu’est-ce qu’un Module ?**

En JavaScript, un module est essentiellement un fichier contenant du
code. Ce code peut être des variables, des fonctions ou des objets, et
il peut être réutilisé dans d’autres parties de l’application.

### 2. **Le Système de Modules de Node.js :**

Node.js utilise un système de modules basé sur le système de fichiers
local. Chaque fichier JavaScript est considéré comme un module, et les
fonctionnalités exposées par un module peuvent être importées dans
d’autres modules.

### 3. **require() et module.exports :**

- **`require()` :** Cette fonction est
utilisée pour importer des fonctionnalités d’autres modules dans le
module en cours. Elle prend en paramètre le chemin du module à importer.
Par exemple :
    
    ```jsx
    const myModule = require('./myModule');
    ```
    
- **`module.exports` :** Cette propriété
est utilisée pour exporter des fonctionnalités depuis un module, les
rendant ainsi accessibles pour d’autres modules. Par exemple :
    
    ```jsx
    // Dans myModule.js
    const myFunction = () => {
      // Fonctionnalité à exporter
    };
      module.exports = myFunction;
    ```
    
    ```jsx
    // config.js
    const apiKey = 'your-api-key';
    const apiUrl = 'https://api.example.com';

    module.exports = {
    apiKey,apiUrl
    };
    ```

### 4. **Exemple Pratique :**

Supposons que nous avons deux fichiers, `math.js` et
`app.js`.

- **`math.js` (Module à Exporter) :**
    
    ```jsx
    // math.js
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    
    module.exports = {
      add,  subtract
    };
    ```
    
- **`app.js` (Module à Importer) :**
    
    ```jsx
    // app.js
    const mathModule = require('./math');
    console.log(mathModule.add(5, 3));      
    // Output: 8console.log(mathModule.subtract(8, 3)); // Output: 5
    ```
    

Dans cet exemple, `math.js` exporte deux fonctions
(`add` et `subtract`), et `app.js` les
importe à l’aide de `require()`.

### 5. Nouvelle syntaxe

En Node.js, l’utilisation de la syntaxe d’import/export se fait
généralement avec ECMAScript (ES) Modules depuis la version 13.2.0 de
Node.js. Voici comment se construit cette nouvelle syntaxe:

```jsx
// myModule.js
export const myVariable = 'Hello, world!';
export function myFunction() {
  console.log('This is a function.');}
```

```jsx
// autreModule.js
import { myVariable, myFunction } from './myModule';
console.log(myVariable);  // Affiche: Hello, world!
myFunction();             // Affiche: This is a function.
```

Vous pouvez également exporter une seule valeur par défaut de votre
module.

```jsx
// myModule.js
const myVariable = 'Hello, world!';
export default myVariable;
```

```jsx
// autreModule.js
import myVariable from './myModule';
console.log(myVariable);  // Affiche: Hello, world!
```

Lorsqu’un module est exporté par défaut, vous pouvez choisir
n’importe quel nom pour la valeur importée.

Assurez-vous que votre fichier a une extension `.mjs` ou
que vous avez configuré votre projet pour autoriser l’utilisation des
modules ES. Vous pouvez également utiliser l’extension `.js`
pour les fichiers de modules ES à condition que vous activiez
l’utilisation des modules ES dans votre fichier
`package.json` en ajoutant `"type": "module"`.

```json
// package.json
{  "type": "module",  
    "scripts": {    "start": "node votre_fichier.js"  }
}
```