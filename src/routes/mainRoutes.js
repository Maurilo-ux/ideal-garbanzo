const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo à página inicial!');
});

router.get('/sobre', (req, res) => {
  res.send('Esta é a página sobre nós.');
});

router.post('/login', (req, res) => {
  res.send('Rota de login acessada com sucesso!');
});

module.exports = router;