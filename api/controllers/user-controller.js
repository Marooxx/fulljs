// Les imports
const User = require(__basedir + '/model/user').User;
const bcrypt = require('bcrypt');

/**
 * Enregistre l'utilisateur en BDD de données
 * /!\ : Le mot de passe sera hashé avec bcrypt
 * @param req 
 * @param res 
 * @param next 
 */
module.exports.register = (req, res, next) => {
    // Récupération de l'utilisateur
    const userReceived = req.body;

    console.log(req.body);

    // On vérifie si le MDP existe
    if(userReceived.plainPassword) {
        // Hasher le mot de passe
        bcrypt.hash(userReceived.plainPassword, 10, (err, hash) => {
            if(err) { next(err); }
            else {
                console.log(userReceived);

                userReceived.password = hash;
                userReceived.plainPassword = '';


                 // Ajout de l'utilisateur en BDD
                User.create(
                    userReceived,
                    (err, user) => {
                        console.log(err);
                        console.log(user);
                        if(err) { next(err); }
                        else {
                            res.json({result: true});
                        }
                    }
                );
            }
        });
    } else {
        res.json({result: false});
    }
    
    
   
};
