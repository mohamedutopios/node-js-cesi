# Pagination

Si on travaille dans un back avec MongoDB, il y a de grands risques qu’il y ait de grandes quantités de données à gérer. C’est à ce moment là que la pagination entre en scène pour pouvoir gérer ces quantités de façon maîtrisée.

Pour cela, nous allons nous servir des **paramètres de requête (query parameters).**

## Query Parameters

Les query parameters (ou paramètres de requête) sont des données envoyées dans une requête HTTP GET pour affiner ou filtrer les résultats d'une recherche ou d'une requête. Les query parameters sont ajoutés à l'URL d'une requête GET après le caractère "?" et sont généralement utilisés pour spécifier des critères de recherche ou des options de tri.
Les query parameters sont généralement constitués d'une paire clé-valeur, où la clé représente le nom du paramètre et la valeur représente la valeur du paramètre. Les paires clé-valeur sont séparées par le caractère "&". Par exemple, l'URL suivante contient deux query parameters :

```bash
<https://example.com/users?name=John&age=30>
```

Dans cet exemple, les query parameters sont "name" et "age", avec les valeurs respectives "John" et "30". Le serveur peut utiliser ces paramètres pour filtrer les résultats de la recherche en fonction du nom et de l'âge des utilisateurs.

## Implémentation dans Nest

Si je veux utiliser ce système dans Nest, je passe par le décorateur `@Query()`en paramètre de ma handling function (par défaut on lui donne le nom de `paginationQuery`).

Nous allons déstructurer cet objet en deux constantes: **limit** et **offset.**

```tsx
@Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `Cette action me renvoie tous mes bouquins. Limit: ${limit}, offset: ${offset}`;
  } // Ce return me permet de vérifier qu'ils passent bien
  // Exemple d'URL: http://localhost:3000/livres?limit=10&offset=5
```