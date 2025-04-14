const fs = require("fs");
const path = require("path");

// Création d'un répertoire
const nouveauRepertoire = path.join(__dirname, "nouveau_repertoire");
fs.mkdir(nouveauRepertoire, (err) => {
  if (err) throw err;
  console.log('Répertoire créé avec succès !');

    // Ecriture dans un fichier
  const fichierPath = path.join(nouveauRepertoire, "nouveau_fichier.txt");
  const contenuAEcrire = "Contenu à écrire";

  fs.writeFile(fichierPath, contenuAEcrire, "utf8", (err) => {
    if (err) throw err;
    console.log("Le fichier a été enregistré avec succès !");

      // Lecture du contenu du fichier
    fs.readFile(fichierPath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log("Contenu du fichier:", data);

        // Liste des fichiers du répertoire
      fs.readdir(__dirname, (err, files) => {
        if (err) throw err;
        console.log("Liste des fichiers et répertoires:", files);

        // Supprimer le fichier
        fs.unlink(fichierPath, (err) => {
          if (err) throw err;
          console.log("Fichier supprimé avec succès !");

          // Supprimer le répertoire
          fs.rmdir(nouveauRepertoire, (err) => {
            if (err) throw err;
            console.log("Répertoire supprimé avec succès !")
          });
        });
      });
    });   
  }); 
});

