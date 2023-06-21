const express = require('express');
const cors = require('cors');

const app = express();
const Port = 9100;

// Middleware pour autoriser les requêtes CORS
app.use(cors());

// Endpoint pour la route /available
app.get('/available', (req, res) => {
  // Implémentez ici la logique pour récupérer les imprimantes disponibles
  // et renvoyez-les en réponse au format JSON
  const printers = ['Imprimante 1', 'Imprimante 2', 'Imprimante 3'];
  res.json({ printer: printers });
});

// Endpoint pour la route /default
app.get('/default', (req, res) => {
  // Implémentez ici la logique pour récupérer l'imprimante par défaut
  // et renvoyez-la en réponse au format JSON
  const defaultPrinter = 'Imprimante par défaut';
  res.json(defaultPrinter);
});

// Endpoint pour la route /write
app.post('/write', (req, res) => {
  // Implémentez ici la logique pour écrire des données sur l'imprimante
  // en utilisant les informations fournies dans le corps de la requête
  res.sendStatus(200);
});

// Endpoint pour la route /read
app.post('/read', (req, res) => {
  // Implémentez ici la logique pour lire des données depuis l'imprimante
  // en utilisant les informations fournies dans le corps de la requête
  const data = 'Données lues depuis l\'imprimante';
  res.send(data);
});

// Démarrer le serveur
app.listen(Port, () => {
  console.log(`Le serveur backend est en cours d'exécution sur le port ${Port}`);
});