import { createContext, useCallback, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
   const { user } = useAuth();
   const [isUserListUpdate, setIsUserListUpdate] = useState(false);
   const [userChats, setUserChats] = useState(null);
   const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
   const [userChatsError, setUserChatsError] = useState(null);
  const [potentialChats, setPotentialChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [isMessagesError, setIsMessagesError] = useState(null);

  // user Chat list
   useEffect(() => {
     setIsUserChatsLoading(true);

     const getUserChats = async () => {
       if (user?._id) {
         const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

         if (response?.error) {
           setIsUserChatsLoading(false);
           return setUserChatsError(response);
         }

         setIsUserChatsLoading(false);
         setUserChats(response);
       }
     };

     getUserChats();
   }, [user, isUserListUpdate]);
  
  // users potential
   useEffect(() => {
     const getUsers = async () => {
       const response = await getRequest(`${baseUrl}/users`);

       if (response.error) {
         return console.log("Error fetching users", response);
       }

       const pChats = response.filter((u) => {
         let isChatCreated = false;

         if (user?._id === u?._id) return false;

         if (userChats) {
           isChatCreated = userChats?.some((chat) => {
             return chat.members[0] === u._id || chat.members[1] === u._id;
           });
         }

         return !isChatCreated;
       });

       setPotentialChats(pChats);
     };

     getUsers();
   }, [user]);

  // messaging
     useEffect(() => {
       setIsMessagesLoading(true);

       const getMessages = async () => {
         const response = await getRequest(
           `${baseUrl}/messages/${currentChat?._id}`
         );

         console.log("getMessages", response);
         if (response?.error) {
           setIsMessagesLoading(false);
           return setIsMessagesError(response);
         }

         setIsMessagesLoading(false);
         setMessages(response);
       };
       
       
       getMessages();
     }, [currentChat]);
  
  //  create chat
  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({ firstId, secondId })
    );

    if (response?.error) {
      return console.log("Error creating chat", response)
    }

    setIsUserListUpdate(!isUserListUpdate);
  })

  // update current chat
  const updateCurrentChat = useCallback((chat) => {
    setCurrentChat(chat)
  })

   const chatData = {
     userChats,
     isUserChatsLoading,
     userChatsError,
     potentialChats,
     createChat,
     updateCurrentChat,
     currentChat,
     messages,
     isMessagesLoading,
     isMessagesError,
   };

   return (
     <ChatContext.Provider value={chatData}> {children} </ChatContext.Provider>
   );
}