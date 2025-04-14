# Introduction

NestJS est un framework Node.js open-source pour la construction d'applications web efficaces, évolutives et fiables. Il utilise TypeScript, un sur-ensemble de JavaScript qui ajoute des fonctionnalités telles que la vérification de type statique, les interfaces et les classes. NestJS est inspiré par Angular, un autre framework populaire pour la construction d'applications web.

Sa grande modularité permet la création d’ **API REST, de microservices, de web sockets, ou encore de GraphQL.**

- **API REST** : REST (Representational State Transfer) est un style d'architecture pour les API web qui utilise des requêtes HTTP pour accéder et manipuler des ressources. Les API REST utilisent des URL pour identifier les ressources et des méthodes HTTP (comme GET, POST, PUT et DELETE) pour effectuer des opérations CRUD (Create, Read, Update, Delete). Les API REST sont couramment utilisées pour construire des applications web et mobiles.

- **Microservices** : Les microservices sont une approche architecturale pour le développement d'applications qui consiste à diviser l'application en petits services indépendants et auto-suffisants. Chaque service est responsable d'une fonctionnalité spécifique et communique avec les autres services via des API. Les microservices permettent une plus grande flexibilité et une meilleure évolutivité que les architectures monolithiques traditionnelles.

- **WebSockets** : WebSocket est un protocole de communication bidirectionnelle en temps réel entre un client et un serveur web. Contrairement aux requêtes HTTP traditionnelles, qui sont initiées par le client, WebSocket permet une communication continue entre le client et le serveur. Cela permet de créer des applications en temps réel, telles que les jeux en ligne, les applications de chat et les tableaux de bord en temps réel.

- **Applications GraphQL** : GraphQL est un langage de requête et un runtime pour les API qui permet aux clients de demander exactement les données dont ils ont besoin, et rien de plus. Contrairement aux API REST traditionnelles, qui renvoient des ressources entières, GraphQL permet aux clients de spécifier les champs exacts qu'ils souhaitent récupérer. Cela permet de réduire la quantité de données transférées et d'améliorer les performances de l'application. GraphQL est souvent utilisé pour les applications web et mobiles qui nécessitent une grande flexibilité dans l'accès aux données.

## Installation de la CLI NestJS

Avant de s’attaquer à l’installation de l’application, assurez-vous que Node.js et NPM sont installés sur votre ordinateur, vous pouvez vérifier cela à tout moment dans votre terminal:

```php
node -v // Version de Node
npm -v // Version de NPM
```

Une fois Node installé sur votre PC, vous avez la possibilité d’installer la CLI Nest via une installation globale:

```php
npm i -g @nestjs/cli // Installation de la CLI Nest
```

Vérifiez ensuite que l’installation s’est bien déroulée en obtenant le numéro de version

```php
nest -v // Version de Nest
```

**Le CLI Nest nous apportera toutes les commandes nécessaires à la génération de fichiers dans le framework ainsi que des raccourcis importants,** en cas d’oubli de certaines commandes, aidez vous du formulaire d’aide

```php
nest --help
```

## Génération de notre application

Maintenant que le CLI est installé, nous pouvons créer un nouveau projet Nest

```php
nest new // Création d'une application Nest
```

Une fois l’application générée, elle est directement prête à l’emploi

```php
cd nomApp // Déplacez vous dans votre application nouvellement créée
npm run start // Le script de lancement de votre app
```

En vous connectant sur votre `localhost:3000` (port par défaut) via votre navigateur, vous atteindrez votre app.

## Structure d’une application Nest

Lorsque vous créez un nouveau projet NestJS à l'aide de la CLI, une structure de répertoires et de fichiers est générée automatiquement:

1. src : Ce répertoire contient le code source de l'application. Tous les fichiers de l'application doivent être placés dans ce répertoire ou dans l'un de ses sous-répertoires.
2. app.module.ts : Ce fichier définit le module racine de l'application. Il importe et enregistre tous les autres modules de l'application, ainsi que les fournisseurs et les contrôleurs.
3. app.controller.ts : Ce fichier définit le contrôleur racine de l'application. Il gère les requêtes entrantes et envoie les réponses appropriées.
4. app.service.ts : Ce fichier définit le service racine de l'application. Il contient la logique métier de l'application et est utilisé par les contrôleurs pour traiter les requêtes.
5. main.ts : Ce fichier est le point d'entrée de l'application. Il crée une instance de l'application NestJS et démarre le serveur.
6. package.json : Ce fichier contient les métadonnées de l'application, telles que les dépendances et les scripts de construction.
7. tsconfig.json : Ce fichier contient la configuration de TypeScript pour l'application.
8. node\_modules : Ce répertoire contient les dépendances de l'application, qui sont installées à l'aide de npm ou yarn.
9. dist : Ce répertoire contient le code compilé de l'application, qui est généré lorsque vous exécutez la commande de construction.
10. test : Ce répertoire contient les fichiers de test de l'application.

En résumé, la structure d'un projet NestJS est organisée autour du répertoire src, qui contient le code source de l'application, et du répertoire dist, qui contient le code compilé. Les fichiers de configuration, tels que package.json et tsconfig.json, sont situés à la racine du projet, tandis que les dépendances sont stockées dans le répertoire node\_modules. Les fichiers de test sont stockés dans le répertoire test.

## Compilation en temps réel et rebuild automatique du serveur

Nous l'avons vu précédemment, pour lancer notre serveur, nous utilisons la commande `npm run start`. Celle-ci est efficace mais pas très pratique lorsque nous travaillons sur notre projet et que nous faisons des modifications à la volée.
Si je souhaite un auto-reload du serveur, il me suffit de lancer mon projet en **dev mode**

```bash
npm run start:dev # Lancement de l'application en dev mode 
```