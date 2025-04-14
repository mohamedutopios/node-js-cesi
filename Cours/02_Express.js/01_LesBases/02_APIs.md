# Les APIs

## Qu'est ce qu'une API ?

Une API est une interface qui permet à deux applications de communiquer entre elles. Cela peut inclur la récupération de données à partir d'une BDD, l'accès à des services tiers, ou même l'exécution de fonctionnalités spécifiques sur un serveur distant.

## Les types d'API

Il existe différents types d'API, mais les deux plus courantes avec lesquelles se familiariser quand on débute sont:
  - **API RESTful (Representational State Transfer)**: Les API RESTful utilisent les principes HTTP standard (GET, POST, PUT, DELETE) pour effectuer des opérations sur des ressources. Les données sont généralement échangées au format JSON.
  - **API SOAP (Simple Object Access Protocol)**: Les API SOAP utilisent un protocole plus complexe basé sur XML. Bien qu'elles soient moins courantes aujourd'hui, certaines applications peuvent encore les utiliser.

## Les requêtes HTTP
Dans le contexte des API web, les requêtes HTTP sont utilisées pour interagir avec les ressources distantes. Les principales méthodes HTTP sont:
  - **GET**: Récupérer des données.
  - **POST**: Envoyer des données (pour être traitées).
  - **PUT**: Mettre à jour une ressource existante.
  - **DELETE**: Supprimer une ressource

## Les réponses HTTP
Les réponses HTTP renvoyées par l'API contiennent des informations sur le résultat de la requête. On définit des codes de statut courants:
  - **200 OK**: La requête a réussi.
  - **201 Created**: La ressource a été créée avec succès.
  - **400 Bad Request**: La requête est mal formulée.
  - **401 Unauthorized**: L'accès à la ressource est refusé en raison de l'absence ou de l'invalidité des informations d'identification.
  - **404 Not Found**: La ressource demandée n'a pas été trouvée.

## Authentification
Certaines API nécessitent une autentification pour garantir la sécurité. Les méthodes courantes incluent l'utilisations de clés d'API, de jetons d'accès ou d'authentification basée sur les normes OAuth.

## Exemple pratique
Imaginons une API de prévisions météorologiques. Pour obtenir les prévisions pour une ville donnée, vous pourriez envoyer une requête GET à l'URL de l'API qui contient le nom de la ville. L'API renverra alors les données météorologiques qu'elle a trouvée au format JSON

**Requête:**
```
GET /weather?city=Lille
```

**Réponse:**
```
{ 
  "city": "Lille",
  "temperature": 5,
  "condition": "Gris"
}
```