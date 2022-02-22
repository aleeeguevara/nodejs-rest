//indexjs será  o entry point executar o servidor
//usar framework express que é um módulo para criar servidor, criar rotas
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas= require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if(erro) {
        console.log(erro);
    }
    console.log('conectado com sucesso');
    Tabelas.init(conexao)
    const app = customExpress();

    app.listen(3000, () => console.log('servidor rodando na porta 3000'));
});

