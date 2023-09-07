const Router = require('express');
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/create', authMiddleware, messageController.create);
router.get('/', authMiddleware, messageController.getAll);
router.put('/:id', authMiddleware, messageController.redact);


module.exports = router;
