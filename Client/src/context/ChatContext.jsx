import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { baseUrl, getRequest } from "../utils/services";


export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
   const { user } = useAuth();
   const [userChats, setUserChats] = useState(null);
   const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
   const [userChatsError, setUserChatsError] = useState(null);

   console.log("chat context user", user);

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
      }

      getUserChats();
   }, [])

   const chatData = {userChats, isUserChatsLoading, userChatsError}

   return (
     <ChatContext.Provider value={chatData}> {children} </ChatContext.Provider>
   );

}