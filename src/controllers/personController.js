
exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
    let lista = [1,2,3]
    return lista
     
};

exports.post = (req, res, next) => {
    //console.log(req.param('nome')+"    "+req.param('email') );
    var email = req.param('email');
    var nome = req.param('nome');
    exports.createUser(nome, email);
    res.status(201).send('Requisição recebida com post deu sucesso!');
};
