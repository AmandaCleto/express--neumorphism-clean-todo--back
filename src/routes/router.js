const { Router } = require('express');
const router = Router();

const todoController = require('../controllers/todo');
const userController = require('../controllers/user');
const authenticateController = require('../controllers/authenticate');

const { authenticationMiddleware } = require('../middlewares/authentication');

router.post('/login', authenticateController.authenticate);

router.post('/user', userController.create);
router.get('/user', [authenticationMiddleware], userController.read);
router.put('/user', [authenticationMiddleware], userController.update);
router.delete('/user', [authenticationMiddleware], userController.destroy);

router.post('/todo', [authenticationMiddleware], todoController.create);
router.get('/todo', [authenticationMiddleware], todoController.read);
router.put('/todo', [authenticationMiddleware], todoController.update);
router.delete('/todo', [authenticationMiddleware], todoController.destroy);

router.get('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: "funcionou 🚀"
    });
})

module.exports = router;