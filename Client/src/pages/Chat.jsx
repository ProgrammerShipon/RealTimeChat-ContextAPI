import ChatBox from "../components/Chat/ChatBox";
import PotentialChats from "../components/Chat/PotentialChats";
import UserChat from "../components/Chat/UserChat";
import useAuth from "../hooks/useAuth";
import useChat from "../hooks/useChat";

const Chat = () => {
   const { user } = useAuth();
   const { userChats, potentialChats, updateCurrentChat } = useChat();

   return (
     <>
       <section>
         <div className="grid gap-1 grid-cols-1 md:grid-cols-2 h-[70vh]">
           <div className="bg-slate-950 p-4">
             <div className="mb-5">
               <h4> Users : {potentialChats?.length} </h4>
               <PotentialChats />
             </div>

             <h4> Chatting list: {userChats?.length} </h4>
             <div className="flex md:block flex-row gap-3">
               {userChats?.length > 0 &&
                 userChats?.map((chat, index) => (
                   <div key={index}>
                     <UserChat chat={chat} user={user} />
                   </div>
                 ))}
             </div>
           </div>
           <aside className="bg-slate-800 p-4">
             <ChatBox />
           </aside>
         </div>
       </section>
     </>
   );
};

export default Chat;