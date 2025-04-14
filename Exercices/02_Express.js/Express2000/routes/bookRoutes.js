const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Chemin vers le fichier JSON des livres
const livresJSONPath = path.join(__dirname, "../data/livres.json" )

// Route 1 - Liste des livres
router.get('/livres', (req, res) => {
    // Utilisez fs.readFile pour lire le contenu du fichier JSON
    fs.readFile(livresJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier JSON : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        // Convertir le contenu du fichier JSON en objet JS
        const listeLivres = JSON.parse(data);

        // Utiliser res.json() pour envoyer la réponse au format JSON
        res.json(listeLivres);
    })
})

// Route 2 - Détails d'un livre par ID
router.get('/livres/:id', (req, res) => {
    // Utilisez fs.readFile pour lire le contenu du fichier JSON
    fs.readFile(livresJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier JSON : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        // Convertir le contenu du fichier JSON en objet JS
        const listeLivres = JSON.parse(data);
        const livreUnique = listeLivres.find(livre => livre.id === parseInt(req.params.id))

        if (!livreUnique) {
            res.status(404).send('Livre non trouvé');
        }

        // Utiliser res.json() pour envoyer la réponse au format JSON
        res.json(livreUnique);
    })
});

// Route 3 - Ajout d'un nouveau livre
router.post('/ajout-livre', (req, res) => {
    // Récupération du nouveau livre dans le corps(body) de la requête
    const nouveauLivre = req.body
    console.log(req.body)
    // Utilisez fs.readFile pour lire le contenu du fichier JSON
    fs.readFile(livresJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier JSON : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        // Convertir le contenu du fichier JSON en objet JS
        const listeLivres = JSON.parse(data)
        listeLivres.push(nouveauLivre)

        fs.writeFile(livresJSONPath, JSON.stringify(listeLivres), err => {
            if (err) {
                console.error('Erreur lors de l\'écriture dans le fichier JSON :', err);
                res.status(500).send("Erreur interne du serveur");
                return;
            }

            res.status(201).send("Livre ajouté avec succès")
        })
       
    })
});

// Route 4 - Recherche par auteur
router.get('/recherche-livre/auteur/:auteur', (req, res) => {
    // Utilisez fs.readFile pour lire le contenu du fichier JSON
    fs.readFile(livresJSONPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier JSON : ', err);
            res.status(500).send('Erreur interne du serveur');
            return;
        }

        // Convertir le contenu du fichier JSON en objet JS
        const listeLivres = JSON.parse(data);
        const livreParAuteur = listeLivres.filter(livre => livre.auteur === req.params.auteur)


        // Utiliser res.json() pour envoyer la réponse au format JSON
        res.json(livreParAuteur);
    })
});


module.exports = router;