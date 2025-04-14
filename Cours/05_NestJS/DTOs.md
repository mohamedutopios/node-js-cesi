# Data Transfer Object (DTO)
## Définition
Dans le contexte du développement d'une application backend, un DTO (Data Transfer Object) est un objet utilisé pour transférer des données entre les couches de l'application.

Un DTO est une représentation simple d'un objet qui ne contient que les données nécessaires pour une opération donnée. Les DTO sont souvent utilisés pour transférer des données entre la couche de présentation (par exemple, une API REST) et la couche de service (par exemple, un service métier) de l'application.

Les DTO sont utilisés pour découpler les couches de l'application et pour fournir une interface stable pour les interactions entre les couches. Les DTO permettent également de réduire la quantité de données transférées entre les couches et de simplifier la validation des données.

Par exemple, dans une application de gestion de tâches, il pourrait y avoir un DTO "CreateTaskDto" qui représente les données nécessaires pour créer une nouvelle tâche. Le DTO "CreateTaskDto" pourrait contenir des propriétés telles que "title", "description" et "dueDate", mais pas d'autres propriétés telles que "id" ou "createdAt" qui ne sont pas nécessaires pour créer une nouvelle tâche.

## Création du DTO

Notre CLI Nest va nous générer notre DTO, généralement ils sont stockés dans leur propre fichier

```tsx
nest g class books/dto/create-book.dto --no-spec
// Ici la création d'un DTO lié à l'ajout d'un nouveau livre (POST): create-book
// --no-spec empêche la création d'un fichier de test
```

Ce DTO aura comme rôle de vérifier que notre payload issu de la requête contient bien tout ce que je souhaite avant de m’enfoncer plus en profondeur dans mon back.
Pour cela on peut jeter un oeil à l’entité que nous avons créé, et voir ce qui est nécessaire ou pas. Par exemple, l’id ne semble pas être nécessaire dans ce genre de cas car c’est généralement la database qui s’en occupe. Nous pouvons donc récupérer le reste.

Les DTOs ne doivent contenir ni logique métier, ni méthodes, ce sont de purs objets, c’est pour ça qu’elles ne nécéssitent pas de fichiers de test.
Par convention, chacune des propriétés du DTO est en readonly, pour maintenir l’immutabilité et empêcher que la requête utilisateur soit modifiée ou corrompue dans notre back.

```tsx
/* CreateBookDto */
export class CreateBookDto {
  readonly name: string;
  readonly author: string;
  readonly genre: string[];
}
```

```tsx
/* UpdateBookDto */
export class UpdateBookDto {
  readonly name?: string;
  readonly author?: string;
  readonly genre?: string[];
}
// Ici, on rend les champs optionnels, car on ne veut pas forcément toujours tout modifier
```

## Ajout aux controllers

Quand nos DTOs sont conçus, il ne nous reste plus qu’à les joindre à nos controllers:

```tsx
// BookController

@Post()
create(@Body() createBookDto: CreateBookDto) {
	return this.bookService.create(createBookDto);
}

@Patch('id')
update(@Params('id') id: string, @Body() updateBookDto : UpdateBookDto) {
	return this.bookService.update(id, updateBookDto)
}
```
Ces DTO nous permettent d’avoir à la fois la flexibilité (via le nullable de TS) et la sécurité lié au type.

*Note*: A ce stade, nos DTOs ont l’air très proche de notre entité. Cela peut ressembler à un doublon, mais c’est surtout dû au fait que nous n’avons pas encore de source de données externe, notre entité est juste un mock pour le moment. Les vraies entités sont en fait un peu différentes.

## Le validationPipe de Nest

Nestjs nous fournit un validationPIpe pour surveiller et valider les règles de validation de nos DTO sur les payloads qui viennent du client. Pour cela il faut passer par plusieurs étapes

1. Activation globale dans l’application. Dans le bootstrap, après l’initialisation de app
```tsx
app.useGlobalPipes(new ValidationPipe());
```

2. Installation des dépendances nécessaires

```tsx
npm i class-validator class-transformer 
```

Maintenant nous pouvons appliquer des décorateurs supplémentaires dans nos DTOs qui seront surveillés par le validationPipe

```tsx
// Implementation des règles de validation dans notre DTO
import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly author: string;

  @IsString({ each: true }) // Le each: true sert à valider toutes les entités du tableau
  readonly genre: string[];
}
```
Voilà un exemple pour un DTO qui doit utiliser des String, bien sûr il existe bien d’autres règles contenus dans d’autres décorateurs que vous pourrez trouver dans la documentation de Nest.

Grâce à cette nouvelle muraille, maintenant, dès qu’une requête atteint mes end-points avec l’une de ces règles qui n’est pas suivi, nous répondons instantanément par une 400 Bad Request.

Il faudrait faire la même chose avec notre DTO Update maintenant mais c’est un peu redondant non ?

## Mapped Types

Nous allons voir comment éviter cette redondance, pour cela il nous faut installer le mapped types de Nest
```tsx
npm i @nestjs/mapped-types
```

Maintenant que notre mapped-types est actif, nous pouvons remplacer notre DTO updateBook par une Extension de notre Create DTO, il récupérera ainsi tout le typage, et nous appliqueront Partial TYpe par dessus qui rajoute un nullable à tous nos champs.

```tsx
// Update DTO
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {}
```
Partial Type ne se contente pas de set les propriétés en optionnel mais il récupère également tous nos décorateurs de Validation Rules.

## WhiteListing

Notre validationPipe ne nous permet pas que de surveiller ce que nous voulons faire entrer dans nos DTOs, il nous permet aussi d’indiquer ce que nous ne souhaitons PAS recevoir. Nous allons pour ça activer une whitelist, tout ce qui n’est pas contenu dans cet whitelist sera bloqué et supprimé de la requête utilisateur, c’est donc une sécurité supplémentaire

La whitelist s’active dans le bootstrap.

```tsx
app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
}));
```

La whitelist fonctionne en deux modes: Soit elle supprime les mauvaises datas de l’utilisateur et laisse passer les bonnes, soit elle ne laisse rien passer et renvoie un message d’erreur, pour cela, il nous faut ajouter une autre propriété au même endroit du bootstrap:

```tsx
app.useGlobalPipes(new ValidationPipe({
   forbidNonWhitelisted: true, // A partir de maintenant, il nous throw des erreurs
   whitelist: true,
```

## Transformation automatique du payload

Vous l’avez vu, le framework Nest transforme automatiquement toutes les requêtes qu’il reçoit en objets JS car c’est généralement le plus utile à manipuler dans notre back.

Mais comment faire si on veut garder le format dans laquel la requête nous est envoyé ? C’est également dans la partie de bootstrap du ValidationPipe que ça se passe

```tsx
app.useGlobalPipes(new ValidationPipe({
   forbidNonWhitelisted: true,
   whitelist: true,
```