# Introduction

TypeScript est un sur-ensemble syntaxique de JavaScript qui ajoute la vérification de type statique et d'autres fonctionnalités à JavaScript, tout en restant compatible avec les bibliothèques et les frameworks JavaScript existants. TypeScript a été développé par Microsoft et est maintenant un projet open-source actif.

Les avantages clés de TypeScript incluent :

1. **Vérification de type statique** : TypeScript permet de détecter les erreurs de type lors de la compilation, avant même d'exécuter le code. Cela améliore la fiabilité et la maintenabilité du code.
2. **Amélioration de l'expérience de développement** : TypeScript offre une meilleure expérience de développement grâce à l'autocomplétion, la vérification de type en temps réel et les informations contextuelles dans les éditeurs de code compatibles.
3. **Interopérabilité avec JavaScript** : TypeScript est entièrement compatible avec JavaScript, ce qui permet d'utiliser les bibliothèques et les frameworks JavaScript existants et de migrer progressivement vers TypeScript.
4. **Fonctionnalités avancées** : TypeScript introduit des fonctionnalités avancées comme les interfaces, les classes, les modules, les génériques et les décorateurs, qui aident à structurer et à organiser le code.

## **Étapes d'Installation de TypeScript**

1. **Installer TypeScript globalement** : Une fois Node.js et npm installés, ouvrez votre terminal ou invite de commandes et exécutez la commande suivante pour installer TypeScript globalement sur votre système :

```
npm install -g typescript
```

1. **Vérifier l'installation** : Pour vérifier que TypeScript est correctement installé, exécutez la commande suivante :

```
tsc --version
```

Cette commande devrait afficher la version de TypeScript installée sur votre système.

1. **Créer un fichier TypeScript** : Créez un nouveau fichier avec l'extension `.ts` (par exemple, `app.ts`) et ouvrez-le dans votre éditeur de code préféré.
2. **Compiler le fichier TypeScript** : Dans votre terminal ou invite de commandes, naviguez jusqu'au répertoire contenant votre fichier TypeScript et exécutez la commande suivante pour compiler le fichier `.ts` en JavaScript (`.js`) :

```
tsc app.ts
```

Cette commande générera un fichier `app.js` contenant le code JavaScript compilé à partir de votre fichier `app.ts`.

1. **Configurer le fichier tsconfig.json** : Pour configurer les options de compilation de TypeScript, vous pouvez créer un fichier `tsconfig.json` à la racine de votre projet. Ce fichier permet de définir les options de compilation, comme la cible de compilation, la compatibilité et les chemins des modules. Vous pouvez générer un fichier `tsconfig.json` de base en exécutant la commande suivante :

```
tsc --init
```

Cette commande créera un fichier `tsconfig.json` avec les options de compilation par défaut. Vous pouvez ensuite modifier ce fichier selon vos besoins.

## **Configuration du fichier tsconfig.json**

Voici quelques options de base couramment utilisées dans le fichier `tsconfig.json` :

1. `target` : Définit la version cible de JavaScript (par exemple, ES3, ES5, ES6, ES2017, etc.). Le compilateur TypeScript générera du code JavaScript compatible avec la version spécifiée.
2. `module` : Définit le format de module à utiliser dans le projet (par exemple, CommonJS, AMD, ES2015, etc.).
3. `strict` : Active le mode strict, qui inclut plusieurs vérifications de type et de code supplémentaires pour assurer la qualité et la cohérence du code.
4. `esModuleInterop` : Active l'interopérabilité entre les modules CommonJS et ES. Cette option facilite l'importation et l'exportation de modules JavaScript dans votre code TypeScript.
5. `sourceMap` : Génère des fichiers source map pour faciliter le débogage du code TypeScript dans les navigateurs et les environnements d'exécution JavaScript.
6. `outDir` : Spécifie le répertoire de sortie où le compilateur TypeScript placera les fichiers JavaScript compilés.
7. `include` et `exclude` : Définissent les fichiers et les répertoires à inclure ou à exclure du processus de compilation.

**Exemple de fichier tsconfig.json**

Voici un exemple de fichier `tsconfig.json` avec des options de configuration courantes :

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

```