const Router = require('express');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/create', authMiddleware, chatController.create);
router.get('/:id', authMiddleware, chatController.getOneChat);
router.get('/', authMiddleware, chatController.getAll);
router.put('/:id', authMiddleware, chatController.delete)

module.exports = router;
