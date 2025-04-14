# Implémentation des services
## Définition

Dans le contexte du développement d'une API, un service est un composant logiciel qui **fournit une fonctionnalité spécifique pour l'application.** Un service est généralement **une classe ou un module qui encapsule une logique métier** spécifique et fournit une interface pour interagir avec cette logique.

Les services sont utilisés pour **séparer les préoccupations** et pour fournir **une couche d'abstraction entre les contrôleurs et les modèles de données.** Les contrôleurs sont responsables de la gestion des requêtes entrantes et de la coordination des réponses, tandis que les modèles de données sont responsables de la gestion des données persistantes de l'application. Les services fournissent une couche intermédiaire qui encapsule la logique métier et permet aux contrôleurs et aux modèles de données de communiquer entre eux.

**La logique métier** est spécifique à chaque application ou système et dépend des besoins et des exigences de l'entreprise ou de l'organisation qui l'utilise. Elle peut inclure des règles de validation, des calculs, des algorithmes, des workflows et des processus métier spécifiques.

Les services peuvent également être utilisés pour fournir des fonctionnalités communes à plusieurs contrôleurs ou modèles de données. Par exemple, un service "AuthenticationService" pourrait être utilisé pour authentifier les utilisateurs et fournir une fonctionnalité d'autorisation pour plusieurs contrôleurs.

## Implémentation des services dans Nest

Je peux générer mon service dans Nest grâce à la Nest CLI

```tsx
nest generate service // Génération d'un service
nest g s // Commande raccourcie
```

Comme pour les controllers, Nest va automatiquement créer notre service ainsi que son fichier de test. Il va également ajouter ce service aux providers.

Dans un framework backend tel que NestJS, les providers sont des composants clés de l'architecture de l'application. Les providers sont gérés par le module d'injection de dépendances du framework, qui crée des instances de providers et les injecte dans les contrôleurs et les autres providers qui en ont besoin.
Par exemple, si je créé un `BookService` , son rôle sera d’être responsable de la gestion de la data et de son stockage et il sera pensé pour être utilisé par le `BookController`  (mais il pourra aussi être injecté n’importe où dans mon back).

Comment fonctionne cette injection de dépendances dans Nest ? Via le constructeur du controller. On le fera passer en paramètre, par convention en private readonly.

```tsx
// BooksController
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
}
```
Pour l’instant, travaillons avec des données brutes (nous verrons les databases plus tard) que nous allons placer comme propriété dans notre Service:

```tsx
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      name: 'Dune',
      author: 'Frank Herbert',
      genre: ['Sci-fi', 'Political'],
    },
    {
      id: 2,
      name: 'La fileuse d\'argent',
      author: 'Naomi Novik',
      genre: ['Fantasy', 'Novel'],
    },
  ];
}
```
Nous pouvons aller plus loin en concevant une **entité** de nos bouquins. C’est le Book[] définit ici dans l’exemple.

**Entity ou Model ? Une entity est souvent utilisée pour représenter une entité de l'application de manière plus abstraite, tandis qu'un model est souvent utilisé pour interagir avec la base de données.** 

**Une entity peut encapsuler les données et les comportements associés à une entité spécifique de l'application, mais elle ne se préoccupe pas nécessairement de la façon dont ces données sont stockées ou récupérées dans la base de données.**

Par convention nous allons créer un dossier `entities`  dans notre dossier lié au controller et nommer dedans un fichier TS `nom.entity.ts`

```tsx
export class Book {
  id: number;
  name: string;
  author: string;
  genre: string[];
}
```

Nous n’allons pas nous pencher sur la logique métier contenu dans le Service ici, car elle peut être très variable. Voici néanmoins un exemple.

## Exemple de CRUD contenu dans un Service

```tsx
import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [
	 {
	      id: 1,
	      name: 'Dune',
	      author: 'Frank Herbert',
	      genre: ['Sci-fi', 'Political'],
	  },
	  {
	    id: 2,
	    name: 'La fileuse d\'argent',
	    author: 'Naomi Novik',
	    genre: ['Fantasy', 'Novel'],
	  },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    return this.books.find(item => item.id === +id);
  }

  create(createBookDto: any) {
    this.books.push(createBookDto);
  }

  update(id: string, updateBookDto: any) {
    const existingBook = this.findOne(id);
    if (existingBook) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const bookIndex = this.books.findIndex(item => item.id === +id);
    if (bookIndex >= 0) {
      this.books.splice(bookIndex, 1);
    }
  }
}
```

## Séparation des préoccupations

Maintenant que notre logique métier est présente dans notre Service, nous pouvons la retirer de nos Controllers:

```tsx
//BooksController
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  
@Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.booksService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.booksService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
```

## Gestion des erreurs

Notre logique métier est en place, mais de façon un peu dangereuse. Il serait préférable d’y appliquer une gestion des erreurs. Pour cela, la meilleure manière reste de générer des Exceptions. Je peux faire cela en créeant une nouvelle Exception si je ne trouve pas la data que je cherche par exemple

```tsx
  findOne(id: string) {
    const book = this.books.find(item => item.id === +id);
    if (!book) {
      throw new NotFoundException(`Book #${id} not found`);
    }
    return book;
  }
```
On peut trouver de nombreux types d’Exceptions, les plus connus étant

- NotFoundException
- InternalServerErrorException
- BadRequestException
- etc…

Si je veux une Exception plus générique, je peux simplement utiliser **HttpException**

