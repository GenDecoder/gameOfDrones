const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const app = express();
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: 'https://game-of-drones-7dc9c.firebaseio.com'
});

const db = admin.firestore();

app.use(bodyParser.json());
app.use(express.static('dist'));
// Settings API
app.get('/api/settings/global/all', async (req, res) => {
   const doc = await db
      .collection('settings')
      .doc('global')
      .get();
   if (doc.exists) {
      res.json(doc.data());
   } else {
      res.send('Some went wrong');
   }
});
app.post('/api/settings/global/rules/update', async (req, res) => {
   const newRules = req.body.rules;
   const snapshot = await db
      .collection('settings')
      .doc('global')
      .set('rules', newRules);
   console.log(snapshot.data());
   res.json(snapshot.data());
});
// Players API
app.get('/api/player/get/all', async (req, res) => {
   const snapshot = await db.collection('players').get();
   res.json({
      list: snapshot.docs.map(doc => {
         const data = doc.data();
         return { ...data, id: doc.id };
      })
   });
});
app.post('/api/player/create', async (req, res) => {
   const ref = await db.collection('players').add({
      name: req.body.name,
      totalGames: 0,
      totalWins: 0,
      totalDefeats: 0,
      numberOfScissors: 0,
      numberOfRocks: 0,
      numberOfPaper: 0
   });
   res.json({ id: ref.id });
});
app.post('/api/player/update', async (req, res) => {
   const { id, win, numberOfScissors, numberOfRocks, numberOfPaper } = req.body;
   const doc = await db
      .collection('players')
      .doc(id)
      .get();
   const player = doc.data();
   const newPlayer = await db
      .collection('players')
      .doc(id)
      .update({
         totalGames: player.totalGames + 1,
         totalWins: player.totalWins + (win ? 1 : 0),
         totalDefeats: player.totalDefeats + (!win ? 1 : 0),
         numberOfScissors: player.numberOfScissors + numberOfScissors,
         numberOfRocks: player.numberOfScissors + numberOfRocks,
         numberOfPaper: player.numberOfScissors + numberOfPaper
      });
   res.json(newPlayer.data());
});
// Init server
app.listen(process.env.PORT || 5151, () =>
   console.log(`Listening on port ${process.env.PORT || 5151}!`)
);
