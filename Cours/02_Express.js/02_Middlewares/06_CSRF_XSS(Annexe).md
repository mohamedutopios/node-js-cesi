# Les attaques CSRF(XSRF)/XSS

Les attaques CSRF (Cross-Site Request Forgery) et XSS (Cross-Site Scripting) sont des vulnérabilités de sécurité courantes dans les applications web. Elles peuvent être exploitées par des attaquants pour compromettre la sécurité et l'intégrité des données des utilisateurs.

## Cross-site Request Forgery (CSRF):

L'attaque CSRF exploite la confiance que le site a dans le navigateur de l'utilisateur. Elle se produit lorsqu'un attaquant force un utilisateur à effectuer une action non intentionnelle sur un site web où cet utilisateur est authentifié.

**Exemple :**

Supposons que vous soyez connecté à votre compte bancaire et que le site web utilise une simple requête GET pour effectuer un virement d'argent. Un attaquant pourrait créer une page web malveillante contenant une image ou un script pointant vers la requête de virement. Si vous visitez cette page tout en étant connecté à votre compte bancaire, la requête de virement pourrait être exécutée sans que vous le sachiez.

## Cross-Site Scripting (XSS):

L'attaque XSS implique l'injection de scripts malveillants dans des pages web consultées par d'autres utilisateurs. Cela se produit lorsque l'application web ne filtre pas correctement les entrées utilisateur et permet l'exécution de scripts côté client non désirés.

**Exemple :**

Supposons qu'un site web permette aux utilisateurs de publier des commentaires. Si le site n'effectue pas une validation et une échappatoire correctes des données entrantes, un attaquant pourrait insérer un script malveillant dans un commentaire. Lorsque d'autres utilisateurs consultent ce commentaire, le script s'exécute dans leur navigateur, pouvant voler des cookies de session ou rediriger vers des sites malveillants