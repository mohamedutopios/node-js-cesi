## 🧠 1. Introduction à MongoDB

### Qu’est-ce que MongoDB ?
MongoDB est une **base de données NoSQL** orientée **documents**, qui stocke les données au format **JSON-like** appelé **BSON**.

### Caractéristiques clés :
| Caractéristique       | Détail                                               |
|------------------------|------------------------------------------------------|
| Type de base           | NoSQL orientée documents                             |
| Format de données      | BSON (JSON binaire)                                  |
| Structure flexible     | Pas de schéma rigide                                 |
| Haute scalabilité      | Supporte la réplication et le sharding               |
| Langage de requête     | Basé sur des objets JSON                            |
| Recommandé pour        | Applications web, APIs, Big Data, temps réel         |

---

## 🧱 2. Concepts fondamentaux

| Terme MongoDB    | Équivalent SQL         | Description                                 |
|------------------|------------------------|---------------------------------------------|
| Base de données  | Base de données        | Conteneur de collections                    |
| Collection       | Table                  | Ensemble de documents                      |
| Document         | Ligne (row)            | Objet JSON/BSON avec des champs dynamiques |
| Champ            | Colonne                | Propriété d’un document                    |
| Index            | Index                  | Accélère les recherches                    |
| `_id`            | Primary key            | Identifiant unique du document             |

---

## 🚀 3. Installation

### a) En local (macOS/Linux/Windows) :
- [Télécharger MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Installer le **MongoDB Shell (`mongosh`)**
- Démarrer le serveur :
```bash
mongod --dbpath /chemin/vers/dossier/data
```

### b) En ligne (plus simple)
- Créer un compte sur [MongoDB Atlas](https://cloud.mongodb.com)
- Créer un cluster gratuit (M0)
- Connecter via URI : `mongodb+srv://user:password@cluster0.mongodb.net/myDB`

---

## 🧪 4. Premières manipulations (Mongo Shell)

```js
// Créer une base
use mydatabase;

// Créer une collection et insérer un document
db.users.insertOne({ name: "Mohamed", age: 30 });

// Lire tous les documents
db.users.find();

// Recherche avec filtre
db.users.find({ age: { $gt: 25 } });

// Mise à jour
db.users.updateOne({ name: "Mohamed" }, { $set: { age: 31 } });

// Suppression
db.users.deleteOne({ name: "Mohamed" });
```

---

## ⚙️ 5. Requêtes avancées

### a) Opérateurs logiques

```js
db.users.find({ $or: [ { age: { $lt: 18 } }, { name: "Mohamed" } ] })
```

### b) Projections (retour partiel)

```js
db.users.find({}, { name: 1, _id: 0 })
```

### c) Tri et pagination

```js
db.users.find().sort({ age: -1 }).limit(10).skip(10)
```

---

## 🔐 6. Index et performances

```js
// Créer un index
db.users.createIndex({ name: 1 });

// Voir les index
db.users.getIndexes();
```

---

## 🔄 7. Relations dans MongoDB

### 1. **Référencement**
```js
// Deux collections : users et posts
{
  user_id: ObjectId("...")
}
```

### 2. **Imbrication (embedding)**

```js
{
  name: "Mohamed",
  address: {
    city: "Paris",
    zip: "75001"
  }
}
```

---

## 🧑‍💻 8. Intégration avec Node.js (mongoose)

### a) Installation :

```bash
npm install mongoose
```

### b) Exemple :

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

const User = mongoose.model('User', { name: String, age: Number });

const user = new User({ name: 'Nora', age: 25 });
user.save().then(() => console.log("Utilisateur enregistré"));
```


