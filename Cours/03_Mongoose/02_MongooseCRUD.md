### Méthodes CRUD Mongoose pour les Modèles :

1. **Création (Create) :**
    - `Model.create(data)`: Crée un nouveau document avec les données spécifiées.
    
    Exemple :
    
    ```jsx
    const newUser = await User.create({ username: 'john_doe', email: 'john@example.com', password: 'securepassword' });
    
    ```
    
2. **Lecture (Read) :**
    - `Model.find(conditions, projection)`: Récupère tous les documents qui correspondent aux conditions spécifiées.
    - `Model.findOne(conditions, projection)`: Récupère le premier document qui correspond aux conditions spécifiées.
    - `Model.findById(id)`: Récupère un document par son ID.
    
    Exemple :
    
    ```jsx
    const users = await User.find({ age: { $gt: 18 } });
    const user = await User.findOne({ username: 'john_doe' });
    const userById = await User.findById('123456789012345678901234');
    
    ```
    
3. **Mise à jour (Update) :**
    - `Model.updateOne(conditions, update)`: Met à jour un seul document qui correspond aux conditions spécifiées.
    - `Model.updateMany(conditions, update)`: Met à jour plusieurs documents qui correspondent aux conditions spécifiées.
    - `Model.findOneAndUpdate(conditions, update, options)`: Récupère et met à jour un document.
    
    Exemple :
    
    ```jsx
    await User.updateOne({ username: 'john_doe' }, { $set: { age: 25 } });
    await User.findOneAndUpdate({ username: 'john_doe' }, { $set: { age: 25 } }, { new: true });
    
    ```
    
4. **Suppression (Delete) :**
    - `Model.deleteOne(conditions)`: Supprime un seul document qui correspond aux conditions spécifiées.
    - `Model.deleteMany(conditions)`: Supprime plusieurs documents qui correspondent aux conditions spécifiées.
    - `Model.findByIdAndDelete(id)`: Supprime un document par son ID.
    
    Exemple :
    
    ```jsx
    await User.deleteOne({ username: 'john_doe' });
    await User.findByIdAndDelete('123456789012345678901234');
    
    ```
    

### Exécution des Requêtes :

Les requêtes Mongoose peuvent être exécutées de deux manières :

- **Utilisation d'une Callback :**
    
    ```jsx
    User.find({ username: 'john_doe' }, (err, users) => {
      if (err) throw err;
      console.log(users);
    });
    
    ```
    
- **Utilisation de Promesses (Async/Await) :**
    
    ```jsx
    const users = await User.find({ username: 'john_doe' });
    console.log(users);
    
    ```
    

### Remarques importantes :

- Les requêtes Mongoose ne sont pas des promesses, mais elles sont "thenables". Cela signifie qu'elles peuvent être utilisées avec `then()` ou en mode `async/await`.