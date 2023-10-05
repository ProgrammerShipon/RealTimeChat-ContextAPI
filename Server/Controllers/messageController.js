const messageModel = require("../Models/messagesModel");

// find all message
const allMessages = async (req, res) => {
   try {
     const messages = await messageModel.find()
     res.status(200).json(messages)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// create message
const createMessage = async (req, res) => {
   const {chatId, senderId, text} = req.body;

   const message = new messageModel({
      chatId,
      senderId,
      text
   });

   try {
     const response = await message.save();
     res.status(200).json(response);
   } catch (error) {
     console.log(error);
     res.status(500).json(error);
   }
}

// get Message
const getMessage = async (req, res) => {
  const { chatId } = req.params;
  console.log("chatId ", chatId);

   try {
      const message = await messageModel.find({ chatId });
      res.status(200).json(message);
   } catch (error) {
     console.log(error);
     res.status(500).json(error);
   }
}

module.exports = { allMessages, createMessage, getMessage}