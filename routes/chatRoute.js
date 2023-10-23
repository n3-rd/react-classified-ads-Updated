const router = require("express").Router();

const { createChat, userChat, fetchConversation } = require("../controllers/chatController");

// const chatController = require("../controllers/chat.controller");

// router
//   .get("/", chatController.getRoomsByUserId)
//   .get("/:roomId", chatController.getMessagesByRoomId)
//   .post("/create-room", chatController.createChatRoom)
//   .post("/:roomId/message", chatController.postMessage)
//   .put("/:roomId/mark-read", chatController.markConversationReadByRoomId);

// module.exports = router;

router.post('/', createChat);
router.get('/:userId', userChat);
router.get('/fetch/:firstId/:secondId', fetchConversation);

module.exports = router;