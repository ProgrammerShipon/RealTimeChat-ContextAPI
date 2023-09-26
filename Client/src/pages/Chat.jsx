import useAuth from "../hooks/useAuth";

const Chat = () => {
   const { user } = useAuth();

   return (
      <>
       {user?.name}  
      </>
   );
};

export default Chat;