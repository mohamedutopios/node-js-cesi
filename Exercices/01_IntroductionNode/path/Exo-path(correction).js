const path = require('path');

const cheminFichier = path.join('.', 'documents', 'rapport.txt');
const cheminAbsolu = path.resolve(cheminFichier);
const aExtensionTxt = path.extname(cheminAbsolu) === '.txt';
const repertoireFichier = path.dirname(cheminAbsolu);
const nomFichier = path.basename(cheminAbsolu, path.extname(cheminAbsolu));
const detailsChemin = path.parse(cheminAbsolu);
const cheminNormalise = path.normalize("chemin//vers//fichier.txt");

console.log("Chemin complet vers rapport.txt:", cheminFichier);
console.log("Chemin absolu:", cheminAbsolu);
console.log("Le fichier a une extension .txt:", aExtensionTxt);
console.log("Répertoire du fichier:", repertoireFichier);
console.log("Nom du fichier (sans extension):", nomFichier);
console.log("Détails du chemin:", detailsChemin);
console.log("Chemin normalisé:", cheminNormalise);
