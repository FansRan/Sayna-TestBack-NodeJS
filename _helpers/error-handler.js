module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({ error: true, message: "Votre token n'est pas correct" });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        Object.entries(err.errors).forEach(([c, erreur]) => {
            if (erreur.kind == "required" && !erreur.value)
                return res.status(400).json({ error: true, message: "Une ou plusieurs données obligatoires sont manquantes" });
        })
        return res.status(409).json({ error: true, message: "Une ou plusieurs données sont erronées" });
    }    

    if (err.keyPattern.email)
        return res.status(409).json({error: true, message: "Un compte utilisant cette adresse mail est déjà enregistré" });

    if (err.keyPattern.cartNumber)
        return res.status(409).json({error: true, message: "La carte existe déjà" });

    // default to 500 server error
    return res.status(500).json({ message: err });
}