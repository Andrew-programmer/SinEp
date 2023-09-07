const ApiError = require('../error/ApiError')
const {Chat} = require('../models/models')


class ChatController {
    async create(req, res, next) {
        const {
            userId_1,
            userId_2
        } = req.body;


        try {
            const chat = await Chat.create({
                userId_1,
                userId_2
            })

            res.status(200).json({message: 'Chat created', chat})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }


    async getOneChat(req, res, next) {
        const {id} = req.params;


        try {
            const chat = await Chat.findOne({
                where: {id}
            })
            if (!chat) {
                return next(ApiError.badRequest('Chat doesn\'t exist'))
            }

            res.status(200).json({chat})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next) {
        const {
            userId,
        } = req.body;


        try {
            const chat = await Chat.findAll();
            const filteredPosts = chat.filter(chat => {
                const checkFirstUser = +chat.userId_1 === +userId;
                const checkSecondUser = +chat.userId_2 === +userId;
                return (checkFirstUser || checkSecondUser);
            })

            res.status(200).json({posts: filteredPosts})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        const {id} = req.params;

        try {
            await Chat.destroy({where: {id}});
            res.status(200).json({message: 'Chat deleted'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }


}

module.exports = new ChatController()
