## Utilisations courantes de l'objet "response" dans Express.js

1. **Texte brut :**
    
    ```jsx
    res.send('Hello, World!');
    ```
    
2. **HTML :**
    
    ```jsx
    res.send('<h1>Hello, World!</h1>');
    ```
    
3. **JSON :**
    
    ```jsx
    res.json({ message: 'Hello, World!' });
    ```
    
4. **Redirection :**
    
    ```jsx
    res.redirect('/nouvelle-page');
    ```
    
5. **Page non trouvée (404) :**
    
    ```jsx
    res.status(404).send('Page non trouvée');
    ```
    
6. **Fichier statique :**
    
    ```jsx
    res.sendFile('/chemin/vers/mon-fichier.html');
    ```
    
7. **Téléchargement de fichier :**
    
    ```jsx
    res.download('/chemin/vers/mon-fichier.pdf');
    ```
    
8. **En-tête personnalisé :**
    
    ```jsx
    res.set('Custom-Header', 'Valeur personnalisée');
    ```
    
9. **Réponse avec code de statut personnalisé :**
    
    ```jsx
    res.status(201).send('Créé avec succès');
    ```