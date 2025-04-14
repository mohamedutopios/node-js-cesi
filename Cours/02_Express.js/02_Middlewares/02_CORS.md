# CORS

Le middleware CORS (Cross-Origin Resource Sharing) est utilisé dans les applications web pour définir quelles ressources peuvent être partagées entre différents domaines. Lorsque vous développez une application front-end qui fait des requêtes vers un serveur back-end sur un domaine différent, vous pourriez rencontrer des problèmes de sécurité liés à la politique same-origin. CORS permet de spécifier quelles ressources peuvent être demandées depuis un domaine donné.

Express propose un middleware intégré pour gérer les problèmes CORS.

### Qu'est-ce que CORS ?

CORS est une politique de sécurité mise en œuvre par les navigateurs web pour restreindre les requêtes HTTP effectuées depuis un domaine différent de celui de la ressource demandée. Cela vise à empêcher les attaques de type Cross-Site Request Forgery (CSRF) et Cross-Site Scripting (XSS). Le middleware CORS dans Express facilite la gestion de ces restrictions.

### Installation

```bash
npm install cors
```

### Utilisation de CORS dans Express

1. **Importez les modules nécessaires dans votre application Express :**
    
    ```jsx
    const express = require('express');
    const cors = require('cors');
    ```
    
2. **Ajoutez le middleware CORS à votre application :**
    
    ```jsx
    app.use(cors());
    ```
    
    Vous pouvez également configurer CORS avec des options spécifiques si nécessaire. Par exemple, pour autoriser seulement certains domaines, vous pouvez le faire comme suit :
    
    ```jsx
    const corsOptions = {
      origin: '<http://allowed-domain.com>',
      optionsSuccessStatus: 200
    };
    
    app.use(cors(corsOptions));
    
    ```
    
    Ici, `origin` spécifie le domaine autorisé à effectuer des requêtes.