const router = require('express').Router();
const userController = require('../controllers/user.controller');

//Modification de l'utilisateur
router.put('/', userController.update);

//Déconnexion de l'utilisateur
// router.delete('/off', userController.logout)

//Suppression de l'utilisateur
router.delete('/', userController.delete)

//Ajout de carte bancaire
router.put('/cart', userController.addCart)

router.get('/', userController.getCurrent);

module.exports = router;