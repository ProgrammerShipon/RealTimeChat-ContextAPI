import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";

const PotentialChats = ({ chat }) => {
   const { user } = useAuth();
   const { potentialChats, createChat } = useChat();
   
   return (
     <div>
       {potentialChats &&
         potentialChats.map((chat, index) => (
             <span
               key={index}
               onClick={() => createChat(user._id, chat._id)}
               className="py-1 px-3 rounded-md bg-green-400 cursor-pointer my-3 mx-2"
             >
               {chat?.name}
             </span>
         ))}
     </div>
   );
};

export default PotentialChats;