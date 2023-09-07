const {Message} = require('../models/models');
const ApiError = require('../error/ApiError')


class MessageController {
    async create(req, res, next) {
        const {
            userId,
            content,
            date,
            chatId
        } = req.body;

        try {
            const message = await Message.create({
                userId,
                content,
                date,
                chatId
            })

            res.status(200).json({message: 'Message sent', content: message})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next){
        const {chatId} = req.body;

        try{
            const messages = await Message.findAll(chatId);

            res.status(200).json({messages})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async redact(req, res, next){
        const {id} = req.params;
        const {newContent} = req.body;

        try{
            await Message.update({
                isRedacted: true,
                content: newContent
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({message: 'Message redacted successfully'})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
}

module.exports = new MessageController();
