//indexjs será  oentrypoint executar o servidor
//usar framework express que é um módulo para criar servidor, criar rotas
const express = require('express');

const app = express();

app.listen(3000, () => console.log('servidor rodando na porta 3000'));
app.get('/', (req, res) => res.send('Servidor rondando, tudo ok'));