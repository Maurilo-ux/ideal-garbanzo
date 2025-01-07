const Usuario = require('../models/User');

exports.register = async (req, res) => {
  const { nome, sobrenome, idade ,email } = req.body;

  try {
    const newUser = await Usuario.create({ nome,sobrenome, idade, email});
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
