import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const useChat = () => {
   const chat = useContext(ChatContext)
   return chat;
};

export default useChat;