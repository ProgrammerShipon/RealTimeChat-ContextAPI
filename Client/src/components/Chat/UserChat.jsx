import useChat from "../../hooks/useChat";
import useFetchRecipient from "../../hooks/useFetchRecipient";

const UserChat = ({ chat, user }) => {
  const { recipientUser, recipientError } = useFetchRecipient(chat, user);
   const { updateCurrentChat } = useChat();
  const activeStatus = true;
  console.log("recipientUser ", recipientUser);

  if (recipientError) {
    return <div>Error fetching recipient user: {recipientError?.message}</div>;
  }

  return (
    <div>
      {recipientUser?.name && (
        <div
          onClick={() => updateCurrentChat(chat)}
          className="flex md:items-center md:justify-between mt-4 bg-slate-600 hover:bg-slate-500 cursor-pointer rounded-sm my-2 p-2 "
        >
          <div className="flex items-center">
            <figure className="w-11 h-11 bg-slate-500 flex justify-center items-center rounded-full mr-2">
              <h1> {recipientUser?.name.slice(0, 1)}</h1>
            </figure>
            <div className="sm:hidden md:block">
              <h3 className="text-xl">
                {recipientUser?.name}{" "}
                {activeStatus && (
                  <span className="ml-2 inline-block w-3 h-3  rounded-full bg-green-500"></span>
                )}
              </h3>
              <p> Text Message </p>
            </div>
          </div>
          <div className="text-right">
            <h4> 12/12/23 </h4>
            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ml-auto">
              {" "}
              2{" "}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserChat;
