module.exports = app => {
    app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimento e está dando um get'));
};