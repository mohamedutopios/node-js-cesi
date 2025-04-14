// Importation des questions et des réponses
const data = require('./data.js');
const readline = require("readline");

// Constantes de colorisation de l'interface
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const RESET_COLOR = "\x1b[0m";

// Initialisation globale du score
let score = 0;

// Mise en place de l'interaction avec l'utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// Fonction d'initialisation du jeu
function init() {
    // Interface de lancement
    console.log("Bienvenue au jeu de devinettes !");
    console.log("-----");

    // Remise à zéro du score préventive
    return score = 0;
}

// Function d'envoi des questions
async function askQuestion() {
    for (const statement of data) {
        let newQuestion = statement.question + "\n" + statement.choices.join("\n") + "\n";
        const userAnswer = await new Promise(resolve => rl.question(newQuestion, resolve));
        
        if (userAnswer.trim().toLowerCase() === statement.answer.charAt(0)) {
            console.log(GREEN, "Bonne réponse !\n", RESET_COLOR);
            score++;
        } else {
            console.log(RED, "Mauvaise réponse, la solution était ", RESET_COLOR, statement.answer, "\n");
        }
    }

    // Affichage final du score
    finalScore();
}

function finalScore() {
    console.log("Vous avez terminé le jeu. ")
    console.log(`Score: ${score}/${data.length}`)
    rl.close();
}

// Fonction de déroulement du jeu
function mainGame() { 

    // Lancement de l'application
    init();

    // Mise en place des questions
    askQuestion(); 
}

mainGame();