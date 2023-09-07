const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const genderRouter = require('./genderRouter');
const postRouter = require('./postRouter');
const groupRouter = require('./groupRouter');
const inboxRouter = require('./inboxRouter');
const chatRouter = require('./chatRouter');
const messageRouter = require('./messageRouter');

router.use('/user', userRouter);
router.use('/gender', genderRouter);
router.use('/post', postRouter);
router.use('/group', groupRouter);
router.use('/inbox', inboxRouter);
router.use('/chat', chatRouter)
router.use('/message', messageRouter);

module.exports = router;
