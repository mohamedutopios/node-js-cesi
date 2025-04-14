# Controllers et gestion des requêtes (CRUD)
## Définition

Une "handle request" (ou "gestion de requête" en français) est un processus dans une application web qui traite une requête entrante d'un client et renvoie une réponse appropriée.

Lorsqu'un client (par exemple, un navigateur web ou une application mobile) envoie une requête HTTP à un serveur web, le serveur doit traiter cette requête pour déterminer quelle action entreprendre et renvoyer une réponse appropriée au client. La gestion de requête est le processus qui se produit sur le serveur pour traiter cette requête et renvoyer une réponse.

Dans une application web, la gestion de requête implique généralement plusieurs étapes, telles que :

1. L'analyse de la requête entrante pour déterminer l'URL demandée, la méthode HTTP utilisée (par exemple, GET, POST, PUT, DELETE), les en-têtes de requête et les paramètres de requête.
2. La vérification de l'authentification et de l'autorisation du client, le cas échéant.
3. Le traitement de la requête, qui peut impliquer l'exécution d'une logique métier, l'accès à une base de données ou à d'autres ressources, et la génération d'une réponse.
4. La génération d'une réponse HTTP appropriée, qui peut inclure des en-têtes de réponse, un code d'état HTTP et un corps de réponse contenant les données demandées par le client.
5. L'envoi de la réponse au client.

Dans les frameworks web modernes, la gestion de requête est souvent gérée par un contrôleur, qui est un composant logiciel responsable de la gestion des requêtes entrantes et de la génération de réponses appropriées. Le contrôleur peut déléguer certaines tâches à des services ou à des fournisseurs, qui sont des composants logiciels spécialisés dans la réalisation de tâches spécifiques (par exemple, l'accès à une base de données ou l'authentification d'un utilisateur).

## Génération de requête avec Nest

Pour créer un controller dans Nest, il me suffit d’utiliser la commande suivante dans le CLI

```php
nest generate controller // Création d'un controller
nest g co // Forme raccourcie

nest generate controller --no-spec // Création sans fichier de test
```

Nest se chargera de créer le contrôleur et son fichier de test dédié. Il l’intégrera également directement dans l’AppModule.

## Routeur pré-intégré (GET)

A la création d’un contrôleur, Nest fournit un routing pré-intégré qui peut être visible dans le décorateur @Controller contenu dans le fichier. La string contenu à l’intérieur indique quels URL vont venir taper dans notre routeur.

```tsx
@Controller("books") // Ce controller sera déclenché par l'URL localhost:3000/books
```

Cependant, aucune méthode HTTP n’est encore déclaré dans notre contrôleur. Dans Nest, toutes les méthodes HTTP passent également par des décorateurs: 

**Première route**

```tsx
@Controller('books')
export class BooksController {
@Get() // Méthode HTTP
findAll() { // Fonction liée
	return "Ici se trouve la liste de tous mes bouquins";
	}
}
```

Mes décorateurs de méthodes HTTP peuvent également prendre un paramètre, il indiquera la route qu’il utilise `@Get('/fantasy')`

## Paramètres de route dynamiques

Bien sûr, mes routes peuvent également prendre des paramètres dynamiques. Dans ces cas-là je fais passer un décorateur Param en paramètre de ma fonction:

```tsx
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Lien vers mon bouquin n°${id}`;
  }
```

Si je ne fais rien passer dans le paramètre de mon décorateur, je peux obtenir tous les paramètres sous la forme d’un objet (ici par exemple, je pourrais aller chercher `params.id` 

```tsx

  @Get(':id')
  findOne(@Param() params) {
    return `Lien vers mon bouquin n°${params.id}`;
  }
```

## Récupération de corps de requête (POST)

Quand je travaille en POST, mon but est très régulièrement de récupérer un PAYLOAD.

Le payload, dans le contexte d'une requête HTTP, fait référence aux données réelles envoyées dans le corps de la requête. Il s'agit des données utiles transmises par le client au serveur, qui peuvent être utilisées pour créer, mettre à jour ou supprimer des ressources sur le serveur. Le payload peut être de différents types, tels que du texte brut, du JSON, du XML ou des données binaires, en fonction du type de contenu spécifié dans l'en-tête de la requête. En général, le payload est utilisé pour transmettre des données structurées et est souvent utilisé dans les requêtes POST et PUT pour créer ou mettre à jour des ressources sur le serveur.

Si j’utilise une méthode POST, je vais vouloir récupérer le corps de ma requête. Pour cela, je devrais utiliser les décorateurs `@Post()` et `@Body()`:

```tsx
  @Post()
  create(@Body() body) {
    return body; // Nous renvoyons le payload dans notre réponse
```

Parfois, je voudrais ne pas récupérer le Body entier mais seulement une clé de mon document JSON, je peux en remplissant le paramètre de mon Body

```tsx
  @Post()
  create(@Body("name") body) { // Je ne récupère que le nom de mon bouquin
    return body; 
```

## Gestion des codes erreurs

Nous pouvons constater en faisant les Get et les Post précédents que les codes erreurs sont automatiques assignés (200 pour Get, 201 pour Post). Mais si nous le souhaitons, nous pouvons **assigner manuellement des codes erreurs**.

Entre notre fonction et notre méthode HTTP, il nous suffit d’utiliser le décorateur `@HttpCode` . Il suffit de faire passer notre code erreur en paramètre.
*Note: NestJS fournit de base un Enum qui conntient la grande majorité des codes erreurs, il se nomme `HttpStatus`*

```tsx
@Post()
@HttpCode(HttpStatus.GONE)
create(@Body() body) {
    // ...
}
```

Une autre méthode consiste à utiliser la même méthode que dans Express (car souvenez-vous, NestJS n’est qu’une surcouche d’Express) en utilisant le décorateur `@Res()`

```tsx
@Get()
findAll(@Res() response) { 
  // Méthode Express
  response.status(200).send(‘Les bouquins sont accessibles’);
```

## Mise à jour des ressources (PUT/PATCH)
Maintenant que notre CREATE et notre READ sont conçus. Passons à notre PUT et à notre PATCH:

- La méthode PUT est utilisée pour remplacer entièrement une ressource existante sur le serveur avec une nouvelle version de cette ressource. Lorsqu'un client envoie une requête PUT, il doit inclure toutes les données nécessaires pour créer une nouvelle version complète de la ressource. Si la ressource n'existe pas encore sur le serveur, la requête PUT la créera.
- La méthode PATCH est utilisée pour mettre à jour partiellement une ressource existante sur le serveur. Lorsqu'un client envoie une requête PATCH, il doit inclure uniquement les données qui doivent être mises à jour, plutôt que toutes les données de la ressource. Les modifications apportées par la requête PATCH sont appliquées à la ressource existante sur le serveur.

Commençons par un patch, assez logiquement, nous utiliserons le décorateur `@Patch()`  qui contiendra comme paramètre l’id de l’élément que nous souhaitons modifier (généralement dynamique). Dans le cas d’une route dynamique, ils nous faut donc deux paramètres à notre fonction d’update, l’id et le corps de la requête qui contient la modification:

```tsx
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Le livre ${id} a été modifié`;
  }
```

## Suppression de la data (DELETE)

Enfin, la suppression suit la même logique que le patch, mais est encore plus facile car elle ne nécessite pas la récupération du corps de la requête. Son décorateur est `@Delete()`

```tsx
  @Delete(':id')
  update(@Param('id') id: string) {
    return `Le livre ${id} a été supprimé`;
  }
```