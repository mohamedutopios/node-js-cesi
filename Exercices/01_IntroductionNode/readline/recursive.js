// Importation des questions et des réponses
const data = require('./data.js');
const readline = require("readline");

const RED = "\x1b[31m";
const RESET_COLOR = "\x1b[0m"

// Fonction de lancement du jeu
function start() {
    console.log("Bienvenue au jeu de devinettes !");
    console.log("-----");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let score = 0;

    // Fonction récursive pour poser les devinettes
    async function askQuestions(index) {
        console.log("index:", index);
        console.log('taille du tableau:', data.length);



        if (index === data.length) {
            console.log("Vous avez terminé le jeu. ")
            console.log(`Score: ${score}/${data.length}`)
            rl.close();
            return;
        }

        const riddle = data[index];
        rl.question(riddle.question + "\n" + riddle.choices.join("\n") + "\n", (userAnswer) => {
            if (userAnswer.trim().toLowerCase() === riddle.answer.charAt(0)) {
                console.log("Bonne réponse !\n");
                score++;
                index++;
            } else {
                console.log(RED, "Mauvaise réponse.\n\n", RESET_COLOR)
            }
            askQuestions(index);
        })
    }

    askQuestions(0);
}

start();

