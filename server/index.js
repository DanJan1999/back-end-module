const express = require(`express`);
const cors = require(`cors`);

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get(`/api/compliment`, (req, res) => {
  const compliments = [
    `Gee, you're a smart cookie!`,
		`Cool shirt!`,
		`Your Javascript skills are stellar.`,
    `You're amazing!`,
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get(`/api/fortune`, (req, res) => {
  const fortunes = [
    `Strong reasons make strong actions.`,
    `Success is a journey, not a destination.`,
    `Take the high road.`,
    `The change you started already have far-reaching effects. Be ready.`,
    `The greatest achievement in life is to stand up again after falling.`,
    `The harder you work, the luckier you get.`,
    `The night life is for you.`,
    `The one that recognizes the illusion does not act as if it is real.`,
  ];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortuneIndex];

  res.status(200).send(randomFortune);

});

app.get(`/api/encouragement`, (req, res) => {
  
  const encouragementPhrases = [
    `We wish you good luck with that! It will go great!`,
    `We are rooting for you! This will be good for you!`,
    `Wow we can't wait to see you succeed with that!`,
  ];

  let randomEncouragementIndex = Math.floor(Math.random() * encouragementPhrases.length);
  let randomEncouragement = encouragementPhrases[randomEncouragementIndex];

  res.status(200).send(randomEncouragement);

});

app.get(`/api/catInspiration`, (req, res) => {
  res.status(200).send(true)
})

app.get(`/api/superSecret`, (req, res) => {
  let response = `Don't waste time looking for shorcuts and enjoy the ride`
  res.status(200).send(response)
})

app.listen(4000, () => console.log("Server running on 4000"));
