//indexjs será  o entry point executar o servidor
//usar framework express que é um módulo para criar servidor, criar rotas
const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3000, () => console.log('servidor rodando na porta 3000'));