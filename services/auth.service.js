const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Auth = db.Auth;

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
    let last_auth = await Auth.findOne({ email });
    if (user) {        
        if (last_auth && last_auth.tentative == 5) {
            return {
                error: true,
                code: 429,
                message: "Trop de tentative sur l'Email " + email + " .Veuillez patienter(1min)",
            };
        }
        if (bcrypt.compareSync(password, user.password)) {
            await Auth.findOneAndRemove({ email })
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
            let last_auth = await Auth.findOne({ email });
            if (!last_auth) {
                last_auth = new Auth({
                    email: email,
                    tentative: 1,
                    attendre: 'no',                                        
                });
            }
            else {
                if (last_auth.tentative < 5)
                    last_auth.tentative += 1                    
                else
                    last_auth.attendre = 'yes'
                last_auth.dernier_tentative = Date.now
            }
            await last_auth.save();
        }
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