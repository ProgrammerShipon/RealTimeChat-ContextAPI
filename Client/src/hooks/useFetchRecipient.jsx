
import { useEffect, useState } from 'react';
import { baseUrl, getRequest } from '../utils/services';

const useFetchRecipient = (chat, user) => {
   const [recipientUser, setRecipientUser] = useState(null);
   const [recipientError, setRecipientError] = useState(null)

   const recipientId = chat?.members.find((id) => id !== user?._id);
   console.log(recipientId)

   useEffect(() => {
     if (!recipientId) return null;

     const getRecipient = async () => {
       const response = await getRequest(
         `${baseUrl}/users/find/${recipientId}`
       );

       if (response?.error) {
         return setRecipientError(response);
       }

       setRecipientUser(response);
      };
      
      getRecipient();
   }, [chat, user]);

   return { recipientUser, recipientError };
};

export default useFetchRecipient;