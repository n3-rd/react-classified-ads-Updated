const Chats = require('../models/ChatModel.js');


const createChat = async(req, res) => {
    const newChat = new Chats({
        members: [req.body.senderId, req.body.receiverId]
    });

    try {
        const result = await newChat.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
};

const userChat = async(req, res) => {
    try {
        const chat = await Chats.find({
            members: {$in: [req.params.userId]}
    })
    res.status(200).json(chat)
    } catch (error){
        res.status(500).json(error);
    }
}; 

const fetchConversation = async(req, res) => {
    try {
        const chat = await Chats.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createChat, userChat, fetchConversation}