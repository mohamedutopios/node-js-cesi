# Regroupement en module

Nous l’avons vu dans le cours précédent, nous faisons interagir de très près, notre BookController et notre BookService. En fait dans ce genre de cas, il est conseillé de regrouper ces différentes entités à l’intérieur d’un **module**.

## Définition
Dans NestJS, les modules sont des conteneurs pour les composants de l'application, tels que les contrôleurs, les providers et les autres modules. Les modules sont utilisés pour organiser et structurer l'application en fonction des fonctionnalités ou des cas d'utilisation.

Un module dans NestJS est une classe décorée avec le décorateur `@Module()`.Les modules peuvent également exporter des providers pour être utilisés par d'autres modules.

Les modules sont utilisés pour encapsuler les fonctionnalités de l'application et pour fournir une interface pour interagir avec ces fonctionnalités. Les modules peuvent également être utilisés pour gérer les dépendances entre les composants de l'application.

Par exemple, dans une application de gestion de tâches, il pourrait y avoir un module "TaskModule" qui encapsule la logique métier de la gestion des tâches. Le module "TaskModule" pourrait contenir un contrôleur "TaskController" pour gérer les requêtes entrantes, un provider "TaskService" pour gérer la logique métier et un provider "TaskRepository" pour interagir avec la base de données.

Le module "TaskModule" pourrait également exporter le provider "TaskService" pour être utilisé par d'autres modules de l'application qui ont besoin d'accéder à la logique métier de la gestion des tâches.

## Création d’un module

C’est notre CLI Nest qui va nous générer notre module

```tsx
nest g module nomModule
// Par exemple pour un module autour des bouquins: nest g module books
```
Dans notre cas, nous allons y mettre notre Controller et notre provider:

```tsx
@Module({ 
  controllers: [BooksController],
  providers: [BooksService] 
})
export class BooksModule {}
```

Et maintenant, il ne faut surtout pas oublier **de retirer notre provider et notre controller** du module principal, sinon j’aurai un doublon.

Cela nous permet de garder notre code organisé, et de libérer de la lisibilié au niveau de notre app.module.ts