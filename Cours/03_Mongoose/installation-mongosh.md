## 💡 Qu’est-ce que `mongosh` ?
`mongosh` (MongoDB Shell) est **le shell interactif officiel moderne** pour interagir avec une base MongoDB (locale ou distante), **remplaçant l'ancien `mongo`**.

---

## ✅ Installation de `mongosh` uniquement

### 🟢 Sous **Ubuntu / Debian**
```bash
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
  gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg

echo "deb [signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" \
  | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt update
sudo apt install -y mongodb-mongosh
```

### 🟣 Sous **macOS (avec Homebrew)**
```bash
brew tap mongodb/brew
brew install mongosh
```

### 🟦 Sous **Windows**
1. Va sur : [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)
2. Choisis **Windows x64**, version stable
3. Installe via l'installateur `.msi` fourni

> Ensuite :  
```powershell
mongosh
```

---

## 🔗 Connexion à un serveur MongoDB

```bash
mongosh "mongodb://admin:admin123@localhost:27017"
```

ou si pas de mot de passe :
```bash
mongosh
```

---

## 📦 Exemple de requêtes dans `mongosh`

```js
use mydb
db.users.insertOne({ name: "Alice", age: 25 })
db.users.find()
```

