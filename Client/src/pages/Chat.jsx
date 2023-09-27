import UserChat from "../components/Chat/UserChat";
import useAuth from "../hooks/useAuth";
import useChat from "../hooks/useChat";

const Chat = () => {
   const { user } = useAuth();
   const {userChats, isUserChatsLoading, userChatsError} = useChat()
   console.log("userChats -> ", userChats);

   return (
     <>
       <section className="grid gap-1 grid-cols-1 md:grid-cols-2 h-[70vh]">
         <div className="bg-slate-950 p-4">
               <h4> Chatting list: { userChats?.length } </h4>
               
               {
                  userChats?.length > 0 && userChats?.map((chat, index) => (
                     <div key={index}>
                        <UserChat chat={chat} user={user} />
                     </div>
                  )) 
               }
         </div>
         <aside className="bg-slate-800 p-4"> messaging list </aside>
       </section>
     </>
   );
};

export default Chat;