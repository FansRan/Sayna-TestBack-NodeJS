const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    create,
};

async function authenticate({ email, password }) {
    if (!email || !password) {
        return {
            error: true,
            code: 412,
            message: "Email/password manquants",
        };
    }
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const access_token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '1h' });        
        const refresh_token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        const wantedKeys =["firstname","lastname", "email", "sexe", "dateNaissance", "createdAt", "updatedAt" ]
        return {
            error: false,
            code: 200,
            message: "L'utilisateur a été authentifié avec succès",
            user: Object.fromEntries(Object.entries(user.toJSON()).filter(([key]) => wantedKeys.includes(key))),
            access_token,
            refresh_token
        };
    }
    else {
        return {
            error: true,
            code: 412,
            message: "Email/password incorrect",
        };
    }
}

async function create(userParam) {
    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();

    return {
        error: false,
        message: "L'utilisateur a bien été créé avec succès",
        user: user.toJSON()
    };
}