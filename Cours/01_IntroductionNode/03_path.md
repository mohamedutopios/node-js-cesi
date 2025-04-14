**Introduction au module `path` de Node.js
:**

Le module `path` est un module intégré au cœur de Node.js
(*vous n’avez donc pas à l’installer via NPM*) qui fournit des
utilitaires pour travailler avec les chemins de fichiers et de
répertoires de manière portable, indépendante de la plateforme. Il
simplifie la manipulation des chemins en fournissant des méthodes pour
construire, analyser et transformer des chemins de fichiers.

Lorsque vous travaillez avec des fichiers et des répertoires dans une
application Node.js, il est essentiel de prendre en compte les
différences entre les systèmes d’exploitation en ce qui concerne la
manière dont les chemins sont représentés. Certains systèmes utilisent
des barres obliques (`/`), tandis que d’autres utilisent des
anti-slashes (`\`). De plus, la gestion des caractères
spéciaux et des chemins absolus ou relatifs peut varier.

Le module `path` résout ces problèmes en fournissant des
méthodes qui opèrent de manière cohérente sur toutes les plates-formes,
facilitant ainsi le développement d’applications robustes et
portables.

**Principales fonctionnalités du module `path`
:**

1. **`path.join([...paths])` :** Cette
méthode permet de créer un chemin en joignant plusieurs segments. Elle
utilise le séparateur de chemin spécifique à la plateforme pour garantir
la portabilité du code.
    
    ```jsx
    const path = require('path');
    const cheminComplet = path.join('dossier', 'sous-dossier', 'fichier.txt');
    ```
    
2. **`path.resolve([...paths])` :** Résout
un chemin absolu à partir de segments de chemin donnés, en prenant en
compte le répertoire de travail actuel.
    
    ```jsx
    const cheminAbsolu = path.resolve('fichier.txt');
    ```
    
3. **`path.basename(path[, ext])` :**
Renvoie la dernière partie du chemin d’accès, avec l’option de spécifier
une extension à supprimer.
    
    ```jsx
    const nomFichier = path.basename('/chemin/vers/fichier.txt');
    ```
    
4. **`path.dirname(path)` :** Renvoie le
répertoire du chemin d’accès spécifié.
    
    ```jsx
    const repertoire = path.dirname('/chemin/vers/fichier.txt');
    ```
    
5. **`path.extname(path)` :** Renvoie
l’extension du fichier du chemin d’accès spécifié.
    
    ```jsx
    const extension = path.extname('/chemin/vers/fichier.txt');
    ```
    
6. **`path.parse(pathString)` :** Renvoie un
objet avec les composants principaux du chemin d’accès (répertoire,
base, nom, extension, etc.).
    
    ```jsx
    const detailsChemin = path.parse('/chemin/vers/fichier.txt');
    ```
    
7. **`path.normalize(path)` :** Normalise le
chemin, résolvant les segments relatifs et supprimant les doubles barres
obliques.
    
    ```jsx
    const cheminNormalise = path.normalize('/chemin//vers/fichier.txt');
    ```