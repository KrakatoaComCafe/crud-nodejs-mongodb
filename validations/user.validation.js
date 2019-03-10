
module.exports = function (req) {

    //Validação dos erros ao receber um usuário
    req.assert("user", "Nome (atributo user) do usuario eh obrigatorio e deve conter no minimo 3 char e, no maximo 100")
        .notEmpty().isLength({ min: 3, max: 10 });
    req.assert("age", "A idade (atributo age) nao pode ser vazia e deve ser, no minimo, 18 anos")
        .notEmpty()
        .isInt({ min: 18 });
    req.assert("phone", "O telefone (atributo phone) deve conter apenas numeros, DDD seguido do numero, contendo 10 ou 11 chars no total")
        .notEmpty()
        .isLength({ min: 10, max: 11 })
        .isNumeric();
    req.assert("is_admin", "O admin (atributo is_admin) deve apresentar valor booleano")
        .notEmpty()
        .isBoolean();

    return req.validationErrors();
};

