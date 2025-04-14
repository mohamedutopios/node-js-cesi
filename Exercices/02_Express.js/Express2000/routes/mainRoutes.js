const express = require('express');
const router = express.Router();

router.get("/bienvenue", (req, res) => {
    res.send("<h1>Bienvenue sur mon site</h1>");
});

router.get("/info", (req, res) => {
    res.json({name: "Mohamed", age: "31"});
});

router.get("/acces-interdit", (req, res) => {
    res.status(403).send("Accès interdit");
});

router.get("/redirection-accueil", (req, res) => {
    res.redirect("/bienvenue");
});

// router.get("*", (req, res) => {
//     res.redirect("/bienvenue");
// });

module.exports = router;