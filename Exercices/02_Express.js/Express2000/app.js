const express = require('express');
const app = express();
const cors = require("cors")
const PORT = 8000;
const mainRoutes = require("./routes/mainRoutes");
const bookRoutes = require('./routes/bookRoutes');

// Middleware de traitement de requête

app.use(cors())

app.use(express.json())

// Routing
app.use('/', mainRoutes); // Routes principales
app.use('/', bookRoutes)

// Front-end statique
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("Serveur en écoute sur le port", PORT);
})