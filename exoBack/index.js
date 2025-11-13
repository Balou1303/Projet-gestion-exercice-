import express from 'express';
import cors from 'cors';
import usersRoute from './Routes/usersRoute.js';
import rolesRoute from './Routes/rolesRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', usersRoute, rolesRoute );


app.get('/accueil', (req, res) => {
    res.send('Hello ben')
});


app.get('/', (req, res) => {
    res.send('ACCUEIL exo back')
});

// démarrage du serveur sur le port 3000
app.listen(3000, () => {
    // message dans la console lorsque le serveur est démarré
    console.log('Serveur démarré sur le port 3000 🟢')
});