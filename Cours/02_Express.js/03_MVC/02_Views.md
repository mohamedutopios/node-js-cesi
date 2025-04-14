# Les views

Les vues (views) sont utilisées pour rendre et afficher le contenu dynamique dans Express côté serveur. On utilise généralement un moteur de modèle (template engine) pour faciliter l'incorporation de données dynamiques dans les vues. Un moteur de modèle permet de générer des pages HTML en utilisant des modèles pré-définis et en injectant des données spécifiques

**Quelques fonctions clés des templates engine:**
  - **Insertion de données:** Les template engine permettent d'insérer dynamiquement des données dans le HTML. Cela signifie que vous pouvez utiliser des variables ou des objets fournis par l'application côté serveur et les insérer directement dans vos modèles.
  - **Réutilisation du code:** Ils facilitent la réutilisation du code HTML en utilisant des modèles répétables.
  - **Logique conditionnelle et boucles:** Les template engine permettent également l'incorporation de logique conditionnelle (if/else) et de boucles (for/while). Cela vous permet de prendre des décisions sur l'affichage de certaines parties de la page en fonction de l'état des données
  - **Séparation des préoccupations:** L'utilisation de template engine favorise la séparation en isolant la logique de présentation (HTML) de la logique métier (JS côté serveur). Cela améliore la maintenabilité du code en rendant les différentes parties de l'application plus modulaires et compréhensibles.

Les différents moteur de modèles peuvent avoir des fonctionnalités et des syntaxes très différentes. Nous allons nous concentrer sur l'un des plus utilisés pour Express, **PUG** (anciennement Jade)

## Configuration de l'application

```shell
npm install pug
```

```js
// app.js
const express = require('express');
const app = express();

app.set('view engine', 'pug') // Configuration du moteur de modèle
app.set('views', path.join(__dirname, 'views')); // Spécification du répertoire des views
```

## Création de vues avec Pug

Créer un dossier `views` à la racine de votre projet. A l'intérieur ed ce dossier, vous pouvez créer des fichiers pug pour vos vues.

## Routes pour rendre les vues

Dans vos routes, utilisez la méthode `render` pour afficher une vue avec des données dynamiques:

```js
app.get('/', (req, res) => {
  res.render('index', {title: 'HomePage', message: 'Bienvenue sur mon site'})
})
```

## Syntaxe de Pug

La syntaxe de Pug est assez unique et diffère considérablement de la syntaxe HTML traditionnelle, Pug utilise une indentation significative pour définir la structure du document au lieu de balises ouvrantes et fermantes. Voici un aperçu de la syntaxe de pug:

### 1. Indentation
Pug utilise l'indentation pour définir la hiérarchie des éléments. L'indentation doit être cohérente dans tout le document pour déterminer les relations parent-enfant. Les blocs d'instructions sont délimités par l'indentation

```pug
doctype html
html(lang="fr")
  head
    title MyPage
  body
    h1 Bienvenue sur mon site
    p Ceci est la description de mon site
```

### 2. Balises

Les balises HTML sont représentées par lenom de la balise suivi des attributs entre parenthèses
```pug
p This is a paragraph.
a(href="#") This is a link
```

### 3. Attributs
Les attributs sont spécifiés entre parenthèses et leurs valeurs entre guillemets (comme en HTML)
```pug
input(type="text", name="username", placeholder="Entrez votre nom")
```

### 4. Classes et ID
Les classes et les ID peuvent être ajoutés directement au nom de la balise, précédés par un point pour une classe et un dièse pour un ID
```pug
p.text-center Ceci est un paragraphe centré
header#myHeader Ce header a un ID
```

### 5. Variables
Vous pouvez utiliser des variables pour rendre le contenu dynamique. Les variables sont délimitées par `=`
```pug
- var username = "John"
p Salut #{username}!
```

### 6. Boucles et conditions
Pug prend également en charge les structures de contrôle de flux comme les boucles et les conditions.
```pug
ul
  each item in ['Apple', 'Banana', 'Lemon']
    li= item
```

### 7. Mixins
Les mixins permettent de définir des morceaux réutilisables de code
```pug
mixin card(title, content, footer)
  .card
    .card-header= title
    .card-body= content
    .card-footer= footer

mixin list(itemList)
  ul
    each item in itemList
      li= item
      
```

## Utilisation de layouts (mise en page)

Dans Pug, l'utilisation de "layouts" permet de définir une structure commune pour plusieurs pages de votre application web. Cela simplifie la gestion de la mise en page globale, car vous pouvez définir une seule fois les éléments tels que l'en-tête, le pied de page, la barre de navigation etc. et les réutiliser sur toutes vos pages.

On créé un fichier de layout, par exemple `layout.pug`
```pug
doctype html
html(lang="fr")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title MonApp
  body
    header
      h1 MonApp
      nav
        ul
          li
            a(href="/") Home
          li
            a(href="/about") About
    main
    block content
    footer
      p Copyright 2024 MonApp
```

Dans cet exemple, le `block content` indique l'endroit où le contenu spécifique de chaque page sera inséré.

Vous pouvez maintenant créer une page spécifique en utilisant ce layout. Par exemple, dans notre `index.pug`:
```pug
extends layout

block content
  h2 Welcome to the Home Page
  p Contenu de la Home Page
```