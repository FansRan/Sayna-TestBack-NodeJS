const authService = require('../services/auth.service');
module.exports = {
    login,
    register,
};

function login(req, res, next) {
    authService.authenticate(req.body)
        .then(result => {
            let code = result.code;
            delete result["code"];
            res.status(code).json(result);
        })            
        .catch(err => next(err));
}

function register(req, res, next) {
    authService.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(err => next(err));
}