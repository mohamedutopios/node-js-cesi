# Le module FS

Le module fs (file system: *système de fichiers*) de Node.js est utilisé pour interagir avec le système de fichiers de l'OS. Il propose des méthodes pour effectuer des opérations de lecture, d'écriture, de suppression et de gestion des fichiers et des répertoires. Pour pouvoir être utilisé, il nécessite d'être **importé**

## Méthodes de base

1. **Lecture de fichiers (`fs.readFile()`)**
Permet de lire le contenu d'un fichier asynchrone.

```js
fs.readFile("chemin/vers/le/fichier.txt", 'utf8', (err, data) => {
  if (err) throw err; console.log(data);
});
```

2. **Ecriture de fichiers (`fs.writeFile()`)**
Permet d'écrire dans un fichier asynchrone

```js
fs.writeFile("chemin/vers/le/fichier.txt", "Contenu à écrire", 'utf8', (err) => {
  if (err) throw err; 
  console.log("Le fichier a été enregistré");
});
```

3. **Lecture de fichiers synchrone (`fs.readFileSync()`)**
Vous pouvez également lire un fichier de manière synchrone, cela bloque l'exécution du reste du code jusqu'à ce que la lecture soit terminée.

```js
const data = fs.readFileSync("chemin/vers/le/fichier.txt", 'utf8');
console.log(data);
```

4. **Liste des fichiers d'un répertoire (`fs.readdir()`)**
Permet de lister les fichiers et les répertoires contenus dans un répertoire.

```js
fs.readdir("chemin/vers/le/repertoire", (err, files) => {
  if (err) throw err;
  console.log("Contenu du répertoire: ", files);
});
```

5. **Statistiques de fichier (`fs.stat()`)**
Donne des informations sur un fichier ou un répertoire, comme la taille, les autorisations, etc.

```js
fs.stat("chemin/vers/le/fichier.txt", (err, stats) => {
  if (err) throw err;
  console.log("Statistiques du fichier: ", stats);
});
```

## Manipulation de répertoires

1. **Création de répertoire (`fs.mkdir()`)**
Permet de créer un nouveau répertoire

```js
fs.mkdir("chemin/vers/nouveau/repertoire", (err) => {
  if (err) throw err;
  console.log("Répertoire créé avec succès!");
});
```

2. **Suppression de fichier ou de répertoire (`fs.unlink(), fs.rmdir()`)**
Permet de supprimer un fichier ou un répertoire

```js
fs.unlink("chemin/vers/le/fichier.txt", (err) => {
  if (err) throw err;
  console.log("Fichier supprimé avec succès!");
});

fs.rmdir("chemin/vers/le/répertoire", (err) => {
  if (err) throw err;
  console.log("Répertoire supprimé avec succès!");
});
```

Ceci constitue une introduction de base au module `fs`. **N'oubliez pas de gérer les erreurs de manière appropriée lorsque vous faîtes des opérations asynchrones**